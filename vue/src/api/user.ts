import client from "./api"
import { AxiosPromise } from "axios"
import { User, SignInParams } from "./interface"

// user一覧を取得
export const getUsers = (): AxiosPromise<User[]> => {
  return client.get("/users")
}

// ログイン
export const Login = (params: SignInParams) => {
  return client.post("/login", params)
}

// ログアウト
export const Logout = () => {
  return client.post("/logout")
}