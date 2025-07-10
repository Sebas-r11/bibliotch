<template>
  <!-- Formulario de registro de contacto -->
  <form @submit.prevent="handlesubmit" class="p-4 max-w-md mx-auto">
    <!-- Mensaje de éxito -->
    <div
      v-if="success"
      class="my-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded"
    >
      ✅ Registro exitoso
    </div>
    <!-- Campo de nombre -->
    <FormInput
      v-model="nombre"
      inputLabel="Nombre"
      inputName="nombre"
      placeholder="Ingrese el nombre"
    />
    <!-- Campo de número de teléfono -->
    <FormInput
      v-model="numero"
      inputLabel="Número"
      inputName="numero"
      inputType="tel"
      placeholder="Ingrese su número de teléfono"
    />
    <!-- Botón de registro -->
    <BaseButton type="submit">Registrar</BaseButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import FormInput from './FormInput.vue'
import { useContactStore } from '@/stores/reproducerStore.js'

// Store de contactos
const contactStore = useContactStore()

// Variables reactivas para los campos del formulario
const nombre = ref('')
const numero = ref('')
const success = ref(false)

// Función para manejar el envío del formulario
function handlesubmit() {
  const nombreTrim = nombre.value.trim()
  const numeroTrim = numero.value.trim()
  if (nombreTrim && numeroTrim) {
    contactStore.addContacto({
      nombre: nombreTrim,
      numero: numeroTrim,
    })
    nombre.value = ''
    numero.value = ''
    success.value = true
    setTimeout(() => (success.value = false), 3000)
  }
}
</script>

<style scoped>
/* Estilos para el formulario de contacto */
</style>
