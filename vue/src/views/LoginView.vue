<script setup lang="ts">
import {ref, reactive } from "vue"
import { User, SignInParams } from "../api/interface"
import { Login, Logout } from "../api/user"
import { useAppStore } from '../store/index'
import axios from 'axios'

  const email = ref<String>("")
  const password = ref<String>("")
  const testForm = ref()
  const store = useAppStore()

  const requiredValidation = (value: any) => !!value || '必ず入力してください' // 入力必須の制約
  const limitLengthValidation = (value: string | any[]) => value.length <= 40 || '40文字以内で入力してください' // 文字数の制約

  const login = async (data: SignInParams)  => {
    await axios.get('http://localhost:81/sanctum/csrf-cookie', { withCredentials: true })
      try {
        const data = <SignInParams>{
          email: email.value,
          password: password.value
        }
          const res = await Login(data)

          if (res?.status === 200) {
            console.log(res)
            store.$patch({
              name: res.data.name,
              email: res.data.email,
            })
            store.setLogin()
          }
      } catch (err) {
        console.log(err)
      }
  }

  const logout = async ()  => {
    //await axios.get('http://localhost:81/sanctum/csrf-cookie', { withCredentials: true })
    try {
      const res = await Logout()

      if (res?.status === 200) {
        console.log(res)
        store.$reset()
        store.setLogout()
      }
    } catch (err) {
      console.log(err)
    }
  }
</script>

<template>
  <h1>ddd</h1>
  <v-container>
    <v-form @submit.prevent ref="testForm">
      <v-row>
      <v-col cols="12" sm="6">
        <v-text-field v-model="email" label="メアドを入力" variant="underlined" :rules="[requiredValidation, limitLengthValidation]"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="password" label="パスワードを入力" variant="underlined" :rules="[requiredValidation, limitLengthValidation]"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn @click="login">ログイン</v-btn>
        <v-btn @click="logout">ログアウト</v-btn>
        <p>名前:{{ store.name }}</p>
				<p>メールアドレス:{{ store.email }}</p>
      </v-col>
    </v-row>
    </v-form>
  </v-container>
</template>