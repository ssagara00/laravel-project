import TopView from '../views/TopView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import StudyrecordView from '../views/StudyrecordView.vue'
import UserView from '../views/UserView.vue'
import TimerView from '../views/TimerView.vue'
import { useAppStore } from '../store/index'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'top',
    component: TopView,
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/timer',
    name: 'timer',
    component: TimerView,
  },
  {
    path: '/studyrecord',
    name: 'studyrecord',
    component: StudyrecordView,
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
/*
router.beforeEach((to) => {
  const store = useAppStore()
  if (to.meta.requiresAuth && store.login == false) {
    return { name: 'login' }
  }
})
*/
export default router
