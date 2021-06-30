<template>
  <input type="text" v-model="inputText" :placeholder="placeholder" @input="onChange" />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: {
      type: String,
      default: 'Search for answers'
    }
  },
  data(){
    return{
      inputText: ''
    }
  },
  methods:{
    onChange(){
      this.$emit('onChange', this.inputText)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/modules/TextInput.scss";
</style>