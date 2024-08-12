import { createRouter, createWebHistory } from 'vue-router';
import HomeApp from '../components/HomeApp.vue';
import InformationApp from '../components/InformationApp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeApp
  },
  {
    path: '/informationApp',
    name: 'Information',
    component: InformationApp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
