<template><main><h1>Dashboard</h1><nav><router-link to="/products">Products</router-link><router-link v-if="auth.user?.role === 'admin'" to="/orders">Orders</router-link></nav></main></template>
<script setup>import { useAuthStore } from '../stores/auth'; const auth = useAuthStore();</script>
