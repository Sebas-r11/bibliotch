<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 bg-white p-6 rounded shadow-md">
    <div
      v-if="success"
      class="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded"
    >
      ✅ Registro registrado exitosamente!
    </div>
    <FormInput v-model="autor" inputLabel="Autor" inputName="Autor" placeholder="Ingrese autor" />
    <FormInput v-model="libro" inputLabel="Libro" inputName="libro" placeholder="Ingrese libro" />

    <FormInput
      v-model="edicion"
      inputLabel="Edicion"
      inputName="edicion"
      inputType="number"
      placeholder="ingrese el año de la edicion"
    />

    <FormInput
      v-model="usuario"
      inputLabel="Usuario"
      inputName="usuario"
      placeholder="Ingrese usuario"
    />

    <div class="mb-4">
      <label for="type" class="block text-sm font-medium text-gray-700">Estado</label>
      <select v-model="type" id="type" class="w-full border px-3 py-2 rounded">
        <option disabled value="">Estado</option>
        <option value="prestado">❌ prestado</option>
        <option value="disponible">✅ disponible</option>
      </select>
    </div>

    <BaseButton type="submit">registrar</BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useReproducerStore } from '@/stores/reproducerStore'
import FormInput from './FormInput.vue'
import BaseButton from './BaseButton.vue'

const store = useReproducerStore()

const autor = ref('')
const libro = ref('')
const edicion = ref(null)
const usuario = ref('')

const success = ref(false)

function handleSubmit() {
  if (autor.value && libro.value && edicion.value > 0 && usuario.value) {
    store.addReproducer({
      autor: autor.value,
      libro: libro.value,
      edicion: edicion.value,
      usuario: usuario.value,
    })

    autor.value = ''
    libro.value = ''
    edicion.value = null
    usuario.value = ''
  }

  success.value = true
  setTimeout(() => (success.value = false), 3000)
}
</script>
