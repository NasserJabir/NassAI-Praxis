<template><main><h1>Products</h1><ul><li v-for="product in products" :key="product.id">{{ product.name }} — {{ product.price }}</li></ul></main></template>
<script setup>
import { onMounted, ref } from 'vue'; import api from '../services/api';
const products = ref([]); onMounted(async () => { products.value = (await api.get('/products')).data.data.data; });
</script>
