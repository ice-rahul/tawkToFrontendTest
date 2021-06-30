<template>
  <div class="search-detail-wrapper">
    <BreadCrumb :detail="detail" />
    <div class="search-detail-container" v-if="articles.length !== 0">
      <Article 
          v-for="article in articles" 
          :key="article.id" 
          :article="article.title" 
          :publishedOn="article.updatedOn"
          class="article-container"
        />
    </div>
  </div>
</template>

<script>
import BreadCrumb from "./atom/BreadCrumb.vue";
import Article from "./atom/Article.vue";
export default {
  name: "SearchDetails",
  components: {
    BreadCrumb,
    Article
  },
  data: () => ({
    detail: [
      {
        id: 1,
        text: "All Categories",
        selected: false,
        url: '/'
      },
      {
        id: 2,
        text: "Search Results",
        selected: true,
        url: '/category'
      },
    ],
  }),
  props: {
    articles: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/modules/SearchDetail.scss";
</style>