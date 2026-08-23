import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import Products from '../views/Products.vue';
import Orders from '../views/Orders.vue';

const router = createRouter({ history: createWebHistory(), routes: [
  { path: '/login', component: Login }, { path: '/register', component: Register },
  { path: '/', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/products', component: Products, meta: { requiresAuth: true } },
  { path: '/orders', component: Orders, meta: { requiresAuth: true, role: 'admin' } },
] });
router.beforeEach((to) => { const auth = useAuthStore(); if (to.meta.requiresAuth && !auth.isAuthenticated) return '/login'; if (to.meta.role && auth.user?.role !== to.meta.role) return '/'; });
export default router;
