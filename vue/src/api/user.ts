import axios from 'axios'
import client from "./api"
import { AxiosPromise } from "axios"
import { User, SignInParams } from "./interface"

// user一覧を取得
export const getUsers = (): AxiosPromise<User[]> => {
  return client.get("/users")
}

// ログイン
export const Login = (params: SignInParams) => {
  axios.get('http://localhost:81/sanctum/csrf-cookie', { withCredentials: true })
  return client.post("/login", params)
}

// ログアウト
export const Logout = () => {
  return client.post("/logout")
}