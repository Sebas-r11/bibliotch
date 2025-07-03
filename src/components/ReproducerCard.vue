<template>
  <div class="bg-white p-4 rounded shadow">
    <h3 class="text-lg font-bold mb-2">
      {{ name }} <span class="text-sm text-gray-500">({{ typeIcon }})</span>
    </h3>
    <p>🥸 autor: {{ autor }}</p>
    <p>📖 libro: {{ libro }}</p>
    <p>📅 fecha edicion: {{ edicion }} año</p>
    <p>🧑‍🦰 usuario: {{ usuario }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['autor', 'libro', 'edicion', 'usuario', 'prestamo'])

const typeIcon = props.prestamo === 'prestado' ? '❌' : '✅'
</script>
