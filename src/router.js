import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import UserSelectionView from '@/views/UserSelectionView.vue';
import DriverRegisterView from '@/views/DriverRegisterView.vue';
import UserSearchView from '@/views/UserSearchView.vue';
import MapSearchView from '@/views/MapSearchView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },

  {
    path: '/user-selection',
    name: 'user-selection',
    component: UserSelectionView,
  },
  {
    path: '/driver-register',
    name: 'driver-register',
    component: DriverRegisterView,
  },
  {
    path: '/user-search-view',
    name: 'user-search-view',
    component: UserSearchView,
  },

  {
    path: '/map-search',
    name: 'map-search',
    component: MapSearchView,
  },

  
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


