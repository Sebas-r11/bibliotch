<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-4">📋 Registro ingresos</h2>

    <div v-if="ingresos.length === 0" class="text-gray-500">No hay registros.</div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <PonedoraCard
        v-for="(ingreso, index) in ingresos"
        :key="index"
        :fecha="ingreso.fechaing"
        :cantidadExtra="ingreso.cantidad"
        :cantidadA="ingreso.lote"
        :cantidadAA="''"
        :calidad="ingreso.type"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIngresosStore } from '@/stores/reproducerStore.js'
import PonedoraCard from '@/components/PonedoraCard.vue'

const store = useIngresosStore()
const ingresos = store.ingresos
</script>
