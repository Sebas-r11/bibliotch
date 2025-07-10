<template>
  <div class="login-form-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Iniciar Sesión</h2>
      <div class="form-group">
        <label for="username">Usuario</label>
        <input v-model="username" id="username" type="text" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input v-model="password" id="password" type="password" required />
      </div>
      <button type="submit">Entrar</button>
      <p v-if="error" class="error">Usuario o contraseña incorrectos</p>
      <p v-if="success" class="success">¡Bienvenido!</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref(false)
const success = ref(false)
const router = useRouter()

function handleLogin() {
  if (username.value === 'admin' && password.value === '1234') {
    error.value = false
    success.value = true
    setTimeout(() => {
      router.push('/navegacion')
    }, 500)
  } else {
    error.value = true
    success.value = false
  }
}
</script>

<style scoped>
.login-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}
.login-form {
  background: #fff;
  padding: 2rem 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
input {
  padding: 0.5rem;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
}
button {
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: #1d4ed8;
}
.error {
  color: #dc2626;
  font-size: 0.95rem;
}
.success {
  color: #16a34a;
  font-size: 0.95rem;
}
</style>
