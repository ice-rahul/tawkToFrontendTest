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
  input{
    padding: 10px 15px;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;

    &::placeholder{
      color: #9C9AA6;
    }
  }
</style>