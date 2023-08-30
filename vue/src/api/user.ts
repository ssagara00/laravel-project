import client from "./api"
import { AxiosPromise } from "axios"
import { User } from "./interface"

// user一覧を取得
export const getUsers = (): AxiosPromise<User[]> => {
  return client.get("/users")
}

// ログイン処理
export const Login = () => {
  return client.get("/login")
}
