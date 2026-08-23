import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import api from '../services/api';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user') ?? 'null'));
  const isAuthenticated = computed(() => Boolean(localStorage.getItem('accessToken')));
  async function login(credentials) { const { data } = await api.post('/auth/login', credentials); localStorage.setItem('accessToken', data.data.token); user.value = data.data.user ?? null; localStorage.setItem('user', JSON.stringify(user.value)); }
  function logout() { localStorage.removeItem('accessToken'); localStorage.removeItem('user'); user.value = null; }
  return { user, isAuthenticated, login, logout };
});
