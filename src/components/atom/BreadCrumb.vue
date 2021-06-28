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
@import "~styles/modules/BreadCrumb.scss";
</style>