<template>
  <div class="bg-white p-4 rounded shadow">
    <h3 class="text-lg font-bold mb-2">
      <span class="text-sm text-gray-500">{{ typeIcon }}</span>
    </h3>
    <p>📅 fecha: {{ fecha }}</p>
    <p>🎉 cantidad extra: {{ cantidadExtra }}</p>
    <p>✨ cantidad A: {{ cantidadA }} año</p>
    <p>🧨 cantidad AA: {{ cantidadAA }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['fecha', 'cantidadExtra', 'cantidadA', 'cantidadAA', 'calidad'])

const typeIcon = props.calidad === 'prestado' ? '❌' : '✅'
</script>
