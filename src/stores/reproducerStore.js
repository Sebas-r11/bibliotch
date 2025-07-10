import { defineStore } from 'pinia'

// Store para los reproductores
export const useReproducerStore = defineStore('reproducer', {
  state: () => ({
    reproducers: [], // Lista de reproductores
  }),
  actions: {
    // Agrega un nuevo reproductor
    addReproducer(reproducer) {
      this.reproducers.push(reproducer)
    },
  },
})

// Store para ponedoras
export const usePonedoraStore = defineStore('ponedora', {
  state: () => ({
    ponedoras: [], // Lista de ponedoras
  }),
  actions: {
    // Agrega una nueva ponedora
    addPonedora(ponedora) {
      this.ponedoras.push(ponedora)
    },
  },
})

// Store para engorde
export const useEngordeStore = defineStore('engorde', {
  state: () => ({
    engordes: [], // Lista de engordes
  }),
  actions: {
    // Agrega un nuevo registro de engorde
    addEngorde(engorde) {
      this.engordes.push(engorde)
    },
  },
})

// Store para ingresos
export const useIngresosStore = defineStore('ingresos', {
  state: () => ({
    ingresos: [], // Lista de ingresos
  }),
  actions: {
    // Agrega un nuevo ingreso
    addIngreso(ingreso) {
      this.ingresos.push(ingreso)
    },
  },
})

// Store para contactos
export const useContactStore = defineStore('contact', {
  state: () => ({
    contactos: [], // Lista de contactos
  }),
  actions: {
    // Agrega un nuevo contacto
    addContacto(contacto) {
      this.contactos.push(contacto)
    },
  },
})
