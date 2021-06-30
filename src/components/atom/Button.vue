<template>
  <button :style="{background: btnColor}"  @click="buttonClicked">
    <i :class="icon" :style="{color: txtColor, fontSize: '1.5em'}" aria-hidden="true"></i>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: {
      type: String,
      default: 'fa fa-search'
    },
    btnColor: {
      type: String,
      default: '#03A84E'
    },
    txtColor: {
      type: String,
      default: '#ffffff'
    }
  },
  methods: {
    buttonClicked(){
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    cursor: pointer;
  }
</style>