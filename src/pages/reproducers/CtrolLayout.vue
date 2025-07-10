<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
      <RouterLink to="/ingresos" class="flex items-center gap-2">
        <h1 class="text-xl font-bold">🐣 Ingreso de Pollitos</h1>
      </RouterLink>
      <RouterLink to="/navegacion" class="flex items-center gap-2">
        <button
          class="bg-white text-blue-800 px-4 py-2 rounded font-bold hover:bg-blue-100 transition"
        >
          Menu de navegacion
        </button>
      </RouterLink>
    </header>

    <nav class="bg-white shadow px-6 py-2 flex gap-4">
      <RouterLink
        to="/ingresos"
        class="text-blue-700 hover:underline"
        :class="{ 'font-bold': $route.path === '/ingreso' }"
      >
        📋 Lista
      </RouterLink>
      <RouterLink
        to="/ingresos/register"
        class="text-blue-700 hover:underline"
        :class="{ 'font-bold': $route.path === '/ingresos/register' }"
      >
        ➕ Registrar
      </RouterLink>
    </nav>

    <main class="p-6">
      <!-- Aquí se cargan las vistas hijas -->
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
</script>
