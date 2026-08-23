import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'; import Dashboard from '../views/Dashboard.vue'; import Products from '../views/Products.vue';
export default createRouter({ history: createWebHistory(), routes: [{ path: '/login', component: Login }, { path: '/', component: Dashboard }, { path: '/products', component: Products }] });
