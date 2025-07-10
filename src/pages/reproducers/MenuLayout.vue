<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <header class="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
      <RouterLink to="/" class="flex items-center gap-2">
        <h1 class="text-xl font-bold">🐔 Home</h1>
      </RouterLink>
    </header>

    <main class="flex-1 flex flex-col items-center p-4 sm:p-6">
      <div class="w-full max-w-6xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          <RouterLink
            to="/ingresos"
            class="w-full h-56 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center hover:bg-blue-100 transition p-4"
          >
            <span class="text-5xl mb-2">🐣</span>
            <span class="text-xl font-bold">Ingresos</span>
            <span class="text-sm text-gray-500 mt-1 text-center">Ver y registrar ingresos</span>
          </RouterLink>
          <RouterLink
            to="/engorde"
            class="w-full h-56 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center hover:bg-blue-100 transition p-4"
          >
            <span class="text-5xl mb-2">🐥</span>
            <span class="text-xl font-bold">Engorde</span>
            <span class="text-sm text-gray-500 mt-1 text-center">Ver y registrar engorde</span>
          </RouterLink>
          <RouterLink
            to="/ponedora"
            class="w-full h-56 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center hover:bg-blue-100 transition p-4"
          >
            <span class="text-5xl mb-2">🥚</span>
            <span class="text-xl font-bold">Ponedoras</span>
            <span class="text-sm text-gray-500 mt-1 text-center">Ver y registrar ponedoras</span>
          </RouterLink>
        </div>
      </div>
      <!-- Aquí se cargan las vistas hijas -->
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* El grid no necesita ocultar scroll, pero se deja por si se usa overflow en otro lado */
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
