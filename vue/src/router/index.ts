import TopView from "../views/TopView.vue"
import AboutView from "../views/AboutView.vue"
import StudyrecordView from "../views/StudyrecordView.vue"
import UserView from "../views/UserView.vue"
import LoginView from "../views/LoginView.vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "top",
    component: TopView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/studyrecord",
    name: "studyrecord",
    component: StudyrecordView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
