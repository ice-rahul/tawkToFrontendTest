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
import FileTextIcon from '../../assets/icons/file-text.svg'
import NextIcon from '../../assets/icons/next-icon.svg'
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
  .article-wrapper {
    padding: 15px;
    display: flex;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    background: #fff;
    width: 100%;
    font-family: 'Lato';
    cursor: pointer;

    .logo, .action {
      padding: 0 25px;
      display: flex;
      align-items: center;
    }

    .text{
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .description{
      font-size: 20px;
      color: #373737;
    }
    .date{
      color: #9C9AA6;
      font-size: 11px;
    }
  }
</style>