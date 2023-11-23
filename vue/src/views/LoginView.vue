<script setup lang='ts'>
import { ref } from 'vue'
import { SignInParams } from '../api/interface'
import { Login, Logout } from '../api/user'
import { useAppStore } from '../store/index'
import { useRouter } from 'vue-router'

  const email = ref<String>('')
  const password = ref<String>('')
  const LoginForm = ref()
  const store = useAppStore()
  const router = useRouter()

  const requiredValidation = (value: any) => !!value || '必ず入力してください' // 入力必須の制約
  const limitLengthValidation = (value: string | any[]) => value.length <= 40 || '40文字以内で入力してください' // 文字数の制約
  console.log(store.login)
  const login = async (data: SignInParams)  => {
    try {
      const data = <SignInParams>{
        email: email.value,
        password: password.value
      }
      const res = await Login(data)

      if (res?.status === 200) {
        store.$patch({
          name: res.data.name,
          email: res.data.email,
        })
        store.setLogin()
        console.log(store.login)
        router.push('/about')
      } else {
        console.log(res?.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const logout = async ()  => {
    try {
      const res = await Logout()

      if (res?.status === 200) {
        store.$reset()
        store.setLogout()
      } else {
        console.log(res?.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

</script>

<template>
  <h1>ddd</h1>
  <v-container>
    <v-form @submit.prevent ref='LoginForm'>
      <v-row>
      <v-col cols='12' sm='6'>
        <v-text-field v-model='email' label='メアドを入力' variant='underlined' :rules='[requiredValidation, limitLengthValidation]'></v-text-field>
      </v-col>
      <v-col cols='12' sm='6'>
        <v-text-field v-model='password' label='パスワードを入力' variant='underlined' :rules='[requiredValidation, limitLengthValidation]'></v-text-field>
      </v-col>
      <v-col cols='12' sm='6'>
        <v-btn @click='login'>ログイン</v-btn>
        <v-btn @click='logout'>ログアウト</v-btn>
        <p>名前:{{ store.name }}</p>
				<p>メールアドレス:{{ store.email }}</p>
        <p>testssss@example.com</p>
        <p>zAku0080</p>
      </v-col>
    </v-row>
    </v-form>
  </v-container>
</template>