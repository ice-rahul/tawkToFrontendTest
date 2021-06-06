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
    path: '*',
    name: 'catchAll',
    component: () => import('../views/HomePage.vue')
 }
];