<template>
  <!-- Input controlado reutilizable -->
  <div class="mb-4">
    <label :for="inputName" class="block text-sm font-medium">{{ inputLabel }}</label>
    <input
      :type="inputType"
      :name="inputName"
      :id="inputName"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-3 py-2 border rounded"
    />
  </div>
</template>

<script setup>
// Props para personalizar el input
defineProps({
  inputLabel: String, // Etiqueta del input
  inputName: String, // Nombre y id del input
  inputType: { type: String, default: 'text' }, // Tipo de input (text, tel, etc)
  placeholder: String, // Placeholder del input
  modelValue: [String, Number], // Valor controlado
})
// Emite el evento para v-model
defineEmits(['update:modelValue'])
</script>
