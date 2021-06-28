<template>
  <div id="header-wrapper">
    <div id="header-text">
      <h1>Knowledge base doesn't have to be boring</h1>
      <h3>Everything you need to manage your messaging</h3>
    </div>
    <div id="header-search">
      <TextInput class="text-input" />
			<Button class="button" />
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
};
</script>

<style lang="scss" scoped>
@import "~styles/modules/Header.scss";
</style>