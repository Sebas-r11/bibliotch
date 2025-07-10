<template>
  <!-- Página de lista de contactos -->
  <div class="p-6">
    <!-- Título de la lista de contactos -->
    <h2 class="text-2xl font-bold text-blue-800 mb-4">📋 Registro de Contacto</h2>

    <!-- Mensaje si no hay contactos registrados -->
    <div v-if="contactos.length === 0" class="text-gray-500">No hay registros.</div>

    <!-- Grid de tarjetas de contacto -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ContactCard
        v-for="(contacto, index) in contactos"
        :key="index"
        :nombre="contacto.nombre"
        :numero="contacto.numero"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Importa el store de contactos y el componente de tarjeta
import { useContactStore } from '@/stores/reproducerStore.js'
import ContactCard from '@/components/ContactCard.vue'

// Obtiene la lista reactiva de contactos
const store = useContactStore()
const contactos = store.contactos
</script>
