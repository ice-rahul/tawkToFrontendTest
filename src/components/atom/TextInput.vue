<template>
  <input type="text" :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: {
      type: String,
      default: 'Search for answers'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/modules/TextInput.scss";
</style>