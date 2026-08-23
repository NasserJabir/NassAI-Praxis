<template><main><h1>Create account</h1><form @submit.prevent="submit"><input v-model="name" required /><input v-model="email" type="email" required /><input v-model="password" type="password" minlength="8" required /><input v-model="passwordConfirmation" type="password" required /><button>Register</button></form></main></template>
<script setup>
import { ref } from 'vue'; import api from '../services/api';
const name = ref(''); const email = ref(''); const password = ref(''); const passwordConfirmation = ref('');
async function submit() { await api.post('/auth/register', { name: name.value, email: email.value, password: password.value, password_confirmation: passwordConfirmation.value }); }
</script>
