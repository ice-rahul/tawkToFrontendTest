<template>
  <div id="header-wrapper">
    <div id="header-text">
      <h1>Knowledge base doesn't have to be boring</h1>
      <h3>Everything you need to manage your messaging</h3>
    </div>
    <div id="header-search">
      <TextInput class="text-input" @onChange="handleChange" />
			<Button class="button" @onClick="onClick" />
    </div>
  </div>
</template>

<script>
import TextInput from "./atom/TextInput.vue";
import Button from './atom/Button.vue';

export default {
  components: {
    TextInput,
		Button
  },
  data(){
    return{
      searchText: "",
    }
  },
  methods: {
    onClick(){
      this.$router.push(`/search/${this.searchText}`)
    },
    handleChange(inputValue){
      this.searchText=inputValue;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/modules/Header.scss";
</style>