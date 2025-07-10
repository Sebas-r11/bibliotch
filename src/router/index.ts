// Importaciones de layouts y páginas principales
import { createRouter, createWebHistory } from 'vue-router'
import PonedorasLayout from '@/pages/reproducers/PonedorasLayout.vue' // Layout para ponedoras
import PonedorasList from '@/pages/reproducers/PonedorasList.vue' // Lista de ponedoras
import PonedorasRegister from '@/pages/reproducers/PonedorasRegister.vue' // Registro de ponedoras
import EngordeLayout from '@/pages/reproducers/EngordeLayout.vue' // Layout para engorde
import EngordeList from '@/pages/reproducers/EngordeList.vue' // Lista de engorde
import EngordeRegister from '@/pages/reproducers/EngordeRegister.vue' // Registro de engorde
import CtrolList from '@/pages/reproducers/CtrolList.vue' // Lista de ingresos
import CtrolRegister from '@/pages/reproducers/CtrolRegister.vue' // Registro de ingresos
import CtrolLayout from '@/pages/reproducers/CtrolLayout.vue' // Layout de ingresos
import MenuLayout from '@/pages/reproducers/MenuLayout.vue' // Menú principal
import HomeLayout from '@/pages/reproducers/HomeLayout.vue' // Página de inicio
import LoginForm from '@/components/LoginForm.vue' // Formulario de login
import ContacList from '@/pages/reproducers/ContacList.vue' // Lista de contactos
import ContacRegister from '@/pages/reproducers/ContacRegister.vue' // Registro de contacto

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Rutas para ponedoras
    {
      path: '/ponedora',
      name: 'ponedoras',
      component: PonedorasLayout,
      children: [
        { path: '', component: PonedorasList }, // Lista
        { path: 'register', component: PonedorasRegister }, // Registro
      ],
    },
    // Rutas para engorde
    {
      path: '/engorde',
      name: 'salidas',
      component: EngordeLayout,
      children: [
        { path: '', component: EngordeList }, // Lista
        { path: 'register', component: EngordeRegister }, // Registro
      ],
    },
    // Rutas para ingresos
    {
      path: '/ingresos',
      name: 'ingreso',
      component: CtrolLayout,
      children: [
        { path: '', component: CtrolList }, // Lista
        { path: 'register', component: CtrolRegister }, // Registro
      ],
    },
    // Menú principal
    {
      path: '/navegacion',
      name: 'Nav',
      component: MenuLayout,
    },
    // Página de inicio
    {
      path: '/',
      name: 'Home',
      component: HomeLayout,
    },
    // Login
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
    },
    // Lista de contactos
    {
      path: '/contact',
      name: 'contact',
      component: ContacList,
    },
    // Registro de contacto
    {
      path: '/contactregister',
      name: 'contactregister',
      component: ContacRegister,
    },
  ],
})

export default router
