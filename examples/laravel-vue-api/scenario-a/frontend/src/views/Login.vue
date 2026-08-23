<template><main><h1>Sign in</h1><form @submit.prevent="submit"><input v-model="email" type="email" required /><input v-model="password" type="password" required /><button>Login</button></form></main></template>
<script setup>
import { ref } from 'vue'; import { useRouter } from 'vue-router'; import { useAuthStore } from '../stores/auth';
const email = ref(''); const password = ref(''); const router = useRouter(); const auth = useAuthStore();
async function submit() { await auth.login({ email: email.value, password: password.value }); await router.push('/'); }
</script>
