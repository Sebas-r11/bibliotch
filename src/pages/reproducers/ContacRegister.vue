<template>
  <!-- Página de registro de contacto -->
  <div class="max-w-2xl mx-auto p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-6">➕ Realizar Nuevo Registro</h2>

    <!-- Formulario de contacto -->
    <ContactForm />

    <!-- Enlace para volver a la lista de contactos -->
    <router-link to="/contact" class="mt-6 inline-block text-sm text-blue-700 hover:underline">
      ← Volver a la lista
    </router-link>
  </div>
</template>

<script setup lang="ts">
// Importa el formulario de contacto
import ContactForm from '@/components/ContactForm.vue'
</script>
