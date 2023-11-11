import { defineStore } from "pinia"

export const useAppStore = defineStore("userData", {
  state: () => ({
    name: '',
    email: '',
    login:false,
  }),
  actions:{
    setLogin(){
      this.login=true
    },
    setLogout(){
      this.login=false
    },
  },
  persist: true,
})