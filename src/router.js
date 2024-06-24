import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import VerifyView from './views/VerifyView.vue';
import RegisterView from '@/views/RegisterView.vue';
import UserSelectionView from '@/views/UserSelectionView.vue';
import DriverRegisterView from '@/views/DriverRegisterView.vue';
import MapSearchView from '@/views/MapSearchView.vue';
import UserLocation from '@/views/UserLocation.vue';
import WaitingForDriverView from '@/views/WaitingForDriverView.vue'

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
    path: '/verify',
    name: 'Verify',
    component: VerifyView,
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
    path: '/map-search',
    name: 'map-search',
    component: MapSearchView,
  },

  {
    path: '/UserLocation',
    name: 'UserLocation',
    component: UserLocation,
  },
  {

  path: '/waiting-for-driver',
  name: 'WaitingForDriverView',
  component: WaitingForDriverView
},

  
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


