import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setInterceptor } from './interceptor'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      title: '控制台',
    },
    component: () => import('../views/dashboard/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

setInterceptor(router)

export default router
