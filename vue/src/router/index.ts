import TopView from "../views/TopView.vue"
import AboutView from "../views/AboutView.vue"
import ListView from "../views/ListView.vue"
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
    path: "/list",
    name: "list",
    component: ListView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
