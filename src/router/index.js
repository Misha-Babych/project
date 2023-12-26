import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AnimePage from '../views/AnimePage.vue';

const routes = [

  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },

 
  {
    path: '/anime/:id',
    name: 'anime',
    component: AnimePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
