<template>
  <div class="article-wrapper">
    <div class="logo">
      <FileTextIcon />
    </div>
    <div class="text">
      <div class="description">{{article}}</div>
      <div class="date">{{publishedOn}}</div>
    </div>
    <div class="action">
      <NextIcon />
    </div>
  </div>
</template>

<script>
import FileTextIcon from '../../assets/icons/file-text.svg';
import NextIcon from '../../assets/icons/icon-next.svg';
export default {
  name: "Article",
  props: {
    article: {
      type: String
    },
    publishedOn: {
      type: String
    }
  },
  components: {
    FileTextIcon,
    NextIcon
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";
  .article-wrapper {
    padding: 15px;
    display: flex;
    border: 1px solid $border-color;
    border-radius: 4px;
    background: $white;
    width: 100%;
    font-family: $font-family;
    cursor: pointer;

    .logo, .action {
      padding: 0 25px;
      display: flex;
      align-items: center;
    }

    .text{
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .description{
      font-size: $text-lg;
      color: $text-black;
    }
    .date{
      color: $text-gray;
      font-size: $text-xs;
    }
  }
</style>