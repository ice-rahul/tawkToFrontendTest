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
@import "../scss/_variables.scss";

#header-wrapper {
  padding: 25px 0 50px 0;
}

#header-text {
  text-align: center;
  font-family: $font-family;
  color: $text-black;
  padding: 20px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
  }

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
}

#header-search {
	display: flex;
	justify-content: center;

	.text-input{
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-right: 0;
		height: 60px;
		width: 40%;
	}
	.button{
		border: 0;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		width: 80px;
	}

}

@media only screen and (max-width: 750px) {
  #header-search {
    .text-input{
      width:80%;
    }
  }
}
@media only screen and (max-width: 600px) {
  #header-search {
    .text-input{
      width:60%;
    }
  }
}
</style>