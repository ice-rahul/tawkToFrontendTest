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
@import "../scss/_variables.scss";
.category-detail-wrapper {
  display: flex;
  background: $text-bg;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 25px 10%;
  gap: 20px;

  .category-detail-container {
    display: flex;
    gap: 5%;
  }
  .card {
    height: max-content;
    width: 100%;
  }
  .left-container {
    width: 25%;
  }
  .right-container{
    width: 70%;
    .article-container{
      margin-bottom: 15px;
    }
  }
  .card-top {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-width: 0;

    &:hover{
      box-shadow: none;
    }
  }
  .card-bottom {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding-bottom: 50px;

    &:hover{
      box-shadow: none;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 25px 5%;
  }

  @media only screen and (max-width: 900px) {
    padding: 25px 10px;
  }

  @media only screen and (max-width: 750px) {
    .category-detail-container {
      flex-direction: column;
    }
    .left-container {
      width: 100%;
    }
    .right-container{
      padding-top: 15px;
      width: 100%;
    }
  }
}
</style>