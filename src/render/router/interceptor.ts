import type { Router } from 'vue-router'
import { done, start } from 'nprogress'

export const setInterceptor = (router: Router) => {
  router.beforeEach((to, from, next) => {
    start()
    return next()
  })

  router.afterEach(() => {
    setTimeout(done, 300)
  })
}
