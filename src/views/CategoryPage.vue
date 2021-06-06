<template>
  <div class="page-container">
    <Header />
    <CategoryDetails :category="info" :articles="articles"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import CategoryDetails from '../components/CategoryDetail.vue';
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
    console.log(this.id)
    Promise.all([
      axios
      .get('/api/categories'),
      axios
      .get(`/api/category/${this.id}`)
    ]).then((results) => {
      const [categories, articles] = results;
      let {data} = categories;
      if(data) {
        this.info = data.filter(val => val.enabled && val.id === this.id)[0];
      }
      data = articles.data;
      if(data){
        this.articles = data.filter(val => val.status == 'published');
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>