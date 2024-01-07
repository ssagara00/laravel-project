<script setup lang='ts'>
  import { ref } from 'vue'
  import { SignInParams } from '../api/interface'
  import { Login } from '../api/user'
  import { useAppStore } from '../store/index'
  import { useRouter } from 'vue-router'

  const email = ref<String>('')
  const password = ref<String>('')
  const LoginForm = ref()
  const store = useAppStore()
  const router = useRouter()

  const requiredValidation = (value: any) => !!value || '必ず入力してください'
  const limitLengthValidation = (value: string | any[]) => value.length <= 10 || '10文字以内で入力してください'
  const emailValidation = (value: string) => /.+@.+/.test(value) || '正しい形式のメールアドレスを入力してください'

  const login = async (data: SignInParams)  => {
    const validResult = await LoginForm.value.validate()
    if (validResult.valid) {
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
          router.push('/about')
        } else {
          console.log(res?.data)
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('バリデーションエラー')
    }
  }
</script>

<template>
  <div>
    <v-card class="d-flex flex-column mx-auto my-6 flat" width="374" color="#fff">
      <v-card-title class="d-flex justify-center pa-0 mt-6">ログイン</v-card-title>
      <v-card-text class="d-flex justify-center flex-column">
        <v-form @submit.prevent ref='LoginForm'>
          <v-text-field
            v-model='email'
            label='メールアドレスを入力'
            variant='underlined'
            :rules='[requiredValidation, emailValidation]'
            >
          </v-text-field>
          <v-text-field
            v-model='password'
            label='パスワードを入力'
            variant='underlined'
            :rules='[requiredValidation, limitLengthValidation]'>
          </v-text-field>
        <div class="text-center">
          <v-btn @click='login'>ログイン</v-btn>
        </div>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>