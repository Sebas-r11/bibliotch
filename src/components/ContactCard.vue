<template>
  <!-- Tarjeta individual de contacto -->
  <div class="bg-white p-4 rounded shadow">
    <!-- Nombre del contacto -->
    <h3 class="text-lg font-bold mb-2">{{ nombre }}</h3>
    <!-- Número del contacto -->
    <p>📞 Número: {{ numero }}</p>
  </div>
</template>

<script setup lang="ts">
// Props esperadas: nombre y numero
const props = defineProps<{
  nombre: string
  numero: string
}>()
</script>

<style scoped>
/* Estilos específicos para la tarjeta de contacto */
</style>
