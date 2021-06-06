<template>
  <div class="page-container">
    <Header />
    <CategoryDetails :category="info" :articles="articles"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import CategoryDetails from '../components/CategoryDetail.vue';
import {ALL_CATEGORIES_URL, CATEGORY_URL} from '../constants/API_URL';
import {PUBLISHED} from '../constants/STATUS';
import axios from "axios";

export default {
  name: 'CategoryPage',
  components: {
    Header,
    CategoryDetails,
  },
  data() {
    return { 
      id: this.$route.params.id,
      info: {},
      articles: []
    }
  },
  mounted() {
    Promise.all([
      axios.get(ALL_CATEGORIES_URL),
      axios.get(`${CATEGORY_URL}/${this.id}`)
    ]).then((results) => {
      const [categories, articles] = results;
      let {data} = categories;
      if(data) {
        this.info = data.filter(val => val.enabled && val.id === this.id)[0];
      }
      data = articles.data;
      if(data){
        this.articles = data.filter(val => val.status == PUBLISHED);
      }
    })
  }
}
</script>
