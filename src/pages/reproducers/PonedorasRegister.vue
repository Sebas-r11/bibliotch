<template>
  <div class="max-w-2xl mx-auto p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-6">➕ Realizar Nuevo Registro</h2>

    <PonedoraForm />

    <router-link to="/ponedora" class="mt-6 inline-block text-sm text-blue-700 hover:underline">
      ← Volver a la lista
    </router-link>
  </div>
</template>

<script setup lang="ts">
import PonedoraForm from '@/components/PonedoraForm.vue'
</script>
