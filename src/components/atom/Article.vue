<template>
  <div class="article-wrapper">
    <div class="logo">
      <FileTextIcon />
    </div>
    <div class="text">
      <div class="description">{{article}}</div>
      <div class="date">{{publishedOn}}</div>
    </div>
    <div class="action">
      <NextIcon />
    </div>
  </div>
</template>

<script>
import FileTextIcon from '../../assets/icons/file-text.svg';
import NextIcon from '../../assets/icons/icon-next.svg';

export default {
  name: "Article",
  props: {
    article: {
      type: String
    },
    publishedOn: {
      type: String
    }
  },
  components: {
    FileTextIcon,
    NextIcon
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/modules/Article.scss";
</style>