<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 bg-white p-6 rounded shadow-md">
    <div
      v-if="success"
      class="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded"
    >
      ✅ Registro registrado exitosamente!
    </div>

    <FormInput
      v-model="fechaing"
      inputLabel="FechaIngreso"
      inputName="fechaing"
      placeholder="Ingrese fecha de ingreso"
    />

    <FormInput
      v-model="cantidad"
      inputLabel="Cantidad"
      inputName="cantidad"
      inputType="cantidad"
      placeholder="Ingrese cantidad"
    />

    <FormInput v-model="lote" inputLabel="Lote" inputName="lote" placeholder="Ingrese lote" />

    <div class="mb-4">
      <label for="type" class="block text-sm font-medium text-gray-700">Destino</label>
      <select v-model="type" id="type" class="w-full border px-3 py-2 rounded">
        <option disabled value="">Destino</option>
        <option value="engorde">🐔 Engorde</option>
        <option value="ponedoras">🐣 Ponedoras</option>
      </select>
    </div>

    <BaseButton type="submit">registrar</BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useIngresosStore } from '@/stores/reproducerStore.js'
import FormInput from './FormInput.vue'
import BaseButton from './BaseButton.vue'

const store = useIngresosStore()

const fechaing = ref('')
const cantidad = ref('')
const lote = ref('')
const type = ref('')

const success = ref(false)

function handleSubmit() {
  if (fechaing.value && cantidad.value > 0 && lote.value && type.value) {
    store.addIngreso({
      fechaing: fechaing.value,
      cantidad: cantidad.value,
      lote: lote.value,
      type: type.value,
    })

    fechaing.value = ''
    cantidad.value = ''
    lote.value = ''
    type.value = ''
  }

  success.value = true
  setTimeout(() => (success.value = false), 3000)
}
</script>
