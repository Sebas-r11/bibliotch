<template>
  <div class="bg-white p-4 rounded shadow">
    <h3 class="text-lg font-bold mb-2">📦 Registro Engorde</h3>
    <p>📅 fecha: {{ fecha }}</p>
    <p>🤏 cantidad {{ cantidad }}</p>
    <p>⚖ peso: {{ peso }}</p>
    <p>💲precio: {{ precio }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['fecha', 'cantidad', 'peso', 'precio'])
</script>
