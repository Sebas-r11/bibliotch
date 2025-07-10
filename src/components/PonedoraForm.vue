<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 bg-white p-6 rounded shadow-md">
    <div
      v-if="success"
      class="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded"
    >
      ✅ Registro registrado exitosamente!
    </div>
    <FormInput v-model="fecha" inputLabel="Fecha" inputName="fecha" placeholder="Ingrese fecha" />
    <FormInput
      v-model="cantidadExtra"
      inputLabel="Cantidad Extra"
      inputName="cantidadExtra"
      placeholder="Ingrese cantidad extra"
    />
    <FormInput
      v-model="cantidadA"
      inputLabel="Cantidad A"
      inputName="cantidadA"
      placeholder="Ingrese cantidad A"
    />
    <FormInput
      v-model="cantidadAA"
      inputLabel="Cantidad AA"
      inputName="cantidadAA"
      placeholder="Ingrese cantidad AA"
    />
    <div class="mb-4">
      <label for="type" class="block text-sm font-medium text-gray-700">Calidad</label>
      <select v-model="type" id="type" class="w-full border px-3 py-2 rounded">
        <option disabled value="">Calidad</option>
        <option value="prestado">❌ Aceptable</option>
        <option value="disponible">✅ Buena</option>
      </select>
    </div>
    <BaseButton type="submit">Registrar</BaseButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePonedoraStore } from '@/stores/reproducerStore.js'
import FormInput from './FormInput.vue'
import BaseButton from './BaseButton.vue'

const Store = usePonedoraStore()

const fecha = ref('')
const cantidadExtra = ref('')
const cantidadA = ref('')
const cantidadAA = ref('')
const type = ref('')

const success = ref(false)

function handleSubmit() {
  if (fecha.value && cantidadExtra.value && cantidadA.value && cantidadAA.value && type.value) {
    Store.addPonedora({
      fecha: fecha.value,
      cantidadExtra: cantidadExtra.value,
      cantidadA: cantidadA.value,
      cantidadAA: cantidadAA.value,
      type: type.value,
    })
    fecha.value = ''
    cantidadExtra.value = ''
    cantidadA.value = ''
    cantidadAA.value = ''
    type.value = ''
    success.value = true
    setTimeout(() => (success.value = false), 3000)
  }
}
</script>
