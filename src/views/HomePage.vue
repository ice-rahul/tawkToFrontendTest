<template>
  <div class="page-container">
    <Header />
    <Category />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Category from '../components/Category.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    Category
  }
}
</script>
