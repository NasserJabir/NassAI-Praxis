<template><div><h1>Products</h1><div v-for="item in items" :key="item.id">{{ item.product_name }} / {{ item.unit_price }}</div></div></template>
<script setup>
import { onMounted, ref } from 'vue'; import api from '../services/api';
const items = ref([]); onMounted(async () => { items.value = (await api.get('/products')).data; });
</script>
