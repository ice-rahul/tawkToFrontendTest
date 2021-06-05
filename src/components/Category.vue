<template>
  <div class="category-wrapper">
    <CategoryCard v-for="item in info" :key="item.title"
      :title="item.title"
      :articles="item.totalArticle"
      :lastUpdate="item.updatedOn"
      :icon="item.icon"
      :id="item.id"
    />
  </div>
</template>

<script>
import CategoryCard from './atom/CategoryCard.vue';
import axios from "axios";
export default {
  name: 'Category',
  components: {
    CategoryCard
  },
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:9000/api/categories')
      .then(response => {
        const {data} = response;
        let filteredData = [...data];
        if(data) {
          filteredData = data.filter(val => val.enabled)
          filteredData.sort((a,b) => a.order - b.order)
        }
        this.info = filteredData
      });
  }
}
</script>

<style lang="scss" scoped>

.category-wrapper{
  display: flex;
  justify-content: center;
  background: #FAFAFA;
  flex: 1;
  flex-wrap: wrap;
  padding: 25px;
  gap: 15px;
}

</style>