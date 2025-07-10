<template>
  <div class="login-page-bg">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
</script>

<style scoped>
.login-page-bg {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
}
</style>
