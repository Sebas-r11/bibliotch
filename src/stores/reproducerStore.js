import { defineStore } from 'pinia'

export const useReproducerStore = defineStore('reproducer', {
  state: () => ({
    reproducers: [],
  }),
  actions: {
    addReproducer(reproducer) {
      this.reproducers.push(reproducer)
    },
  },
})
