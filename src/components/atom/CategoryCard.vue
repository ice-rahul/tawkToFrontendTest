<template>
  <div class="category-card-wrapper" v-on:click="onClick(id)">
    <div class="category-row">
      <component v-bind:is="findIcon" class="tab"></component>
      <span class="category-title" v-if="title">{{title}}</span>
    </div>
    <div class="category-row">
      <span class="articles" v-if="articles">{{articles}} articles</span>
      <span class="lastUpdate" v-if="lastUpdate">Last update {{calcDate()}}</span>
      <span class="description" v-if="description">{{description}}</span>
    </div>
  </div>
</template>

<script>
import PlayIcon from '../../assets/icons/play.svg';
import CommentIcon from '../../assets/icons/message-circle.svg';
import DesktopIcon from '../../assets/icons/monitor.svg';
import LinkIcon from '../../assets/icons/link.svg';
import GemIcon from '../../assets/icons/advanced_features.svg';
import ShoppingCartIcon from '../../assets/icons/shopping-cart.svg';
import InfoIcon from '../../assets/icons/info.svg';

export default {
  name: 'CategoryCard',
  props: {
    title: {
      type: String,
    },
    articles: {
      type: Number,
    },
    lastUpdate: {
      type: String,
    },
    description: {
      type: String
    },
    icon: {
      type: String,
      default: 'play'
    },
    id: {
      type: String
    },
    clickable: {
      type: Boolean,
      default: true
    }
  },
  components: {
    PlayIcon,
    CommentIcon,
    DesktopIcon,
    LinkIcon,
    GemIcon,
    ShoppingCartIcon,
    InfoIcon
  },
  methods: {
    calcDate: function (event) {
      const lastUpdatedOn = Date.parse(this.lastUpdate)
      const today = new Date();
      const differenceInSec = (today - lastUpdatedOn) / 1000;
      const MINUTES = 60;
      const HOUR = 60 * MINUTES;
      const DAY = 24 * HOUR;
      const YEAR = 365 * DAY;
      const TOTAL_YEAR = Math.floor(differenceInSec / YEAR);
      const TOTAL_DAY = TOTAL_YEAR > 0 ? (differenceInSec - (TOTAL_YEAR * YEAR)) / DAY : (differenceInSec / DAY); 
      return TOTAL_YEAR > 0 ? `${TOTAL_YEAR} years ${Math.floor(TOTAL_DAY)} days ago` : `${Math.floor(TOTAL_DAY)} days ago`;
    },
    onClick: function(id) {
      this.clickable && this.$router.push(`category/${id}`);
    }
  },
  computed: {
    findIcon: function() {
      switch(this.icon){
        case 'play': return "PlayIcon";
        case 'comment': return "CommentIcon";
        case 'deskop': return "DesktopIcon";
        case 'link': return "LinkIcon";
        case 'gem': return "GemIcon";
        case 'shopping-cart': return "ShoppingCartIcon";
        case 'info': return "InfoIcon";
        default: return "PlayIcon"; 
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category-card-wrapper{
  width: 25%;
  background: #ffffff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid #EEEEEE;
  font-family: 'Lato';
  text-align: center;
  gap: 15px;
  cursor: pointer;

  &:hover{
    box-shadow: 0 0 4px 0 grey;
  }

  .category-row{
    display: flex;
    flex-direction: column;
    align-items: center;

    .category-title{
      padding-top: 10px;
      font-size: 20px;
      font-weight: bold;
      color: #373737;
    }
    .icon{
      margin: 15px;
    }
    .articles{
      font-size: 13px;
      color: #03A84E;
    }
    .lastUpdate{
      font-size: 11px;
      color: #9C9AA6;
    }
    .description{
      font-size: 13px;
      color: #9C9AA6;
      line-height: 18px;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 30%;
  }

  @media only screen and (max-width: 900px) {
    width: 40%;
  }

  @media only screen and (max-width: 750px) {
    width: 48%;
  }

  @media only screen and (max-width: 425px) {
    width: 100%;
  }

}
</style>