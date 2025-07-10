<template>
  <div class="max-w-2xl mx-auto p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-6">➕ Realizar Nuevo Registro</h2>

    <EngordeForm />

    <router-link to="/engorde" class="mt-6 inline-block text-sm text-blue-700 hover:underline">
      ← Volver a la lista
    </router-link>
  </div>
</template>

<script setup>
import EngordeForm from '@/components/EngordeForm.vue'
</script>
