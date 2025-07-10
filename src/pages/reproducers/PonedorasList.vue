<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-4">📋 Registro Ponedoras</h2>

    <div v-if="ponedoras.length === 0" class="text-gray-500">No hay registros.</div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <PonedoraCard
        v-for="(ponedora, index) in ponedoras"
        :key="index"
        :fecha="ponedora.fecha"
        :cantidadExtra="ponedora.cantidadExtra"
        :cantidadA="ponedora.cantidadA"
        :cantidadAA="ponedora.cantidadAA"
        :calidad="ponedora.type"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePonedoraStore } from '@/stores/reproducerStore.js'
import PonedoraCard from '@/components/PonedoraCard.vue'

const store = usePonedoraStore()
const ponedoras = store.ponedoras
</script>
