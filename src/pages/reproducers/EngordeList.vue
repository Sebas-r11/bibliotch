<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-4">📋 Registro Kardex</h2>

    <div v-if="engordes.length === 0" class="text-gray-500">No hay registros en la Kardex.</div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <EngordeCard
        v-for="(engorde, index) in engordes"
        :key="index"
        :fechaing="engorde.fechaing"
        :cantidad="engorde.cantidad"
        :lote="engorde.lote"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEngordeStore } from '@/stores/reproducerStore.js'
import EngordeCard from '@/components/EngordeCard.vue'

const store = useEngordeStore()
const engordes = store.engordes
</script>
