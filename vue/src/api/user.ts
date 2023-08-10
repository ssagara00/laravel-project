import client from "./api"

// user一覧を取得
export const getTodos = () => {
  return client.get("/users")
}
