import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TopView from "../views/TopView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "top",
    component: TopView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
