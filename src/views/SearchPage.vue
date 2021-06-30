<template>
  <div class="page-container">
    <Header />
    <SearchDetails :articles="articles"/>
    <EmptyIcon class="empty-search" v-if="articles.length === 0" />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import SearchDetails from '../components/SearchDetail.vue';
import {SEARCH_URL, CATEGORY_URL} from '../constants/API_URL';
import {PUBLISHED} from '../constants/STATUS';
import axios from "axios";
import EmptyIcon from '../assets/icons/empty-search.svg';

export default {
  name: 'SearchPage',
  components: {
    Header,
    SearchDetails,
    EmptyIcon
  },
  data() {
    return { 
      id: this.$route.params.id,
      articles: [],
    }
  },
  mounted() {
    Promise.all([
      axios.get(SEARCH_URL)
    ]).then((results) => {
      const [articles] = results;
      let data = articles.data;
      let filteredArticles = data.filter((articles) => {
        return articles.title.includes(this.id);
      })
      this.articles = filteredArticles;
    })
  }
}
</script>

<style lang="scss" scoped>
  .empty-search{
    margin:auto;
  }
</style>
