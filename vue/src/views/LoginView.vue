<script setup lang="ts">
import {ref, reactive } from "vue"
import { User } from "../api/interface"

const email = ref<String>("")

const requiredValidation = (value: any) => !!value || '必ず入力してください' // 入力必須の制約
const limitLengthValidation = (value: string | any[]) => value.length <= 10 || '10文字以内で入力してください' // 文字数の制約
/*
ules: {
        required: value => !!value || '入力してください',
        email: value => /.+@.+\\..+/.test(value) || 'メールアドレスの形式が正しくありません',
        tel: value => /^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/.test(value.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi, ''))|| '電話番号の形式が正しくありません',
        max: value => (value && value.length <= 100) || '100文字以下で入力してください',
      },
*/

    const state = reactive({
      // ***** (中略) *****
      // 送信が成功したかどうかのフラグ
      success: false,
    })
    const testForm = ref()


  const addTask = async ()  => {
  /*if (!taskName.value.trim()) {
    // 入力が空orスペースのみの場合はエラーメッセージを表示
    errorMessage.value = "入力してください。";
    return;
  }
  errorMessage.value = "";*/

  // 以下、フォーム、ボタン動作テスト用コード
  /*
  const validResult = await testForm.value.validate()
      if (validResult.valid) {
        state.success = true
        const emails = email.value.trim()
  console.log(emails)
  //email.value = ""
      } else {
        state.success = false
      }
  */

  // ログインテスト
  
  }
</script>

<template>
  <h1>ddd</h1>
  <v-container>
    <v-form @submit.prevent ref="testForm">
      <v-row>
      <v-col cols="12" sm="6">
        <!-- 新規タスクを入力するテキストフィールド -->
        <v-text-field v-model="email" label="タスクを入力" variant="underlined" :rules="[requiredValidation, limitLengthValidation]"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <!-- 入力したタスクを追加するボタン -->
        <v-btn @click="addTask">追加</v-btn>
      </v-col>
    </v-row>
    </v-form>
  </v-container>
</template>