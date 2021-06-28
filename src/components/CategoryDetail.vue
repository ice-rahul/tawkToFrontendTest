<template>
  <div class="category-detail-wrapper">
    <BreadCrumb :detail="detail" />
    <div class="category-detail-container">
      <div class="left-container">
        <CategoryCard
          :title="category.title"
          :lastUpdate="category.updatedOn"
          :icon="category.icon"
          :clickable="false"
          class="card card-top"
        />
        <CategoryCard
          :description="category.description"
          :clickable="false"
          icon="info"
          class="card card-bottom"
        />
      </div>
      <div class="right-container">
        <Article 
          v-for="article in articles" 
          :key="article.id" 
          :article="article.title" 
          :publishedOn="article.updatedOn"
          class="article-container"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "./atom/BreadCrumb.vue";
import CategoryCard from "./atom/CategoryCard.vue";
import Article from "./atom/Article.vue";

export default {
  name: "CategoryDetails",
  components: {
    BreadCrumb,
    CategoryCard,
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
        text: "Getting Started",
        selected: true,
        url: '/category'
      },
    ],
  }),
  props: {
    category: {
      type: Object
    },
    articles: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/modules/CategoryDetail.scss";
</style>