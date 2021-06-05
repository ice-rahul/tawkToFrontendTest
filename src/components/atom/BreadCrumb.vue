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
.bread-crumb-container{
  font-family: 'Lato';
  font-size: 13px;
  color: #9C9AA6;

  .selected {
    color: #03A84E;
    cursor: pointer;
  }

  .fa-chevron-right{
    color: #D3D3D3;
    margin: 0 10px;
  }
}
</style>