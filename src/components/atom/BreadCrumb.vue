<template>
  <div class="bread-crumb-container">
    <span v-for="(item, index) in detail" :key="item.id">
      <span :class="[!item.selected ? 'selected' : '']" v-on:click="onClick(item.url)">{{item.text}}</span>
      <em v-if="detail[index+1]" class="fas fa-chevron-right"></em>
    </span>
  </div>
</template>

<script>

export default {
  name:'BreadCrumb',
  props: {
    detail: {
      type: Array,
      default: [{text: "All Categories"}]
    }
  },
  methods: {
    onClick: function(url) {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";
.bread-crumb-container{
  font-family: $font-family;
  font-size: $text-sm;
  color: $text-gray;

  .selected {
    color: $green;
    cursor: pointer;
  }

  .fa-chevron-right{
    color: #D3D3D3;
    margin: 0 10px;
  }
}
</style>