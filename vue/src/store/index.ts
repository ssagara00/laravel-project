import { defineStore } from "pinia"

export const useAppStore = defineStore("userData", {
  state: () => ({
    name: '太郎',
    email: 'sample@test.com',
  }),
})