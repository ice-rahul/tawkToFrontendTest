export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('../views/CategoryPage.vue')
  },
  {
    path: '/search/:id',
    name: 'search',
    component: () => import('../views/SearchPage.vue')
  },
  {
    path: '*',
    name: 'catchAll',
    component: () => import('../views/HomePage.vue')
 }
];