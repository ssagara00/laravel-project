import client from "./api"
import { AxiosPromise } from "axios"
import { StudyRecord } from "./interface"

// 一覧を取得
export const getStudyrecords = (): AxiosPromise<StudyRecord[]> => {
  return client.get("/studyrecords")
}
