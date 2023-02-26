import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setInterceptor } from './interceptor'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/project',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      title: '控制台',
      icon: 'dashboard',
    },
    component: () => import('../views/dashboard/index.vue'),
  },
  {
    path: '/project',
    name: 'Project',
    meta: {
      title: '项目',
      icon: 'layers',
    },
    component: () => import('../views/project/index.vue'),
  },
  {
    path: '/project/create',
    name: 'ProjectCreate',
    meta: {
      title: '项目创建',
      ignoreMenu: true,
    },
    component: () => import('../views/project/create/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

setInterceptor(router)

export default router
