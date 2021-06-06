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
@import "../../scss/_variables.scss";
  input{
    padding: 10px 15px;
    border: 1px solid $border-color;
    border-radius: 4px;
    font-size: $text-md;
    font-weight: 400;

    &::placeholder{
      color: $text-gray;
    }
  }
</style>