import client from "./api"
import { AxiosPromise } from "axios"
import { User } from "./interface"

// user一覧を取得
export const getTodos = (): AxiosPromise<User[]> => {
  return client.get("/users")
}
