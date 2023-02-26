import { routes } from '@render/router'
import type { RouteRecordRaw } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import type { MenuValue } from 'tdesign-vue-next'

export const useMenu = () => {
  const route = useRoute()
  const router = useRouter()

  const convertRoute2Menu = (routes: RouteRecordRaw[]) => {
    return routes.filter(route => (!route.redirect && !route.meta?.ignoreMenu)).map((route) => {
      const menu: any = { name: route.name, path: route.path, title: route.meta?.title || '', icon: route.meta?.icon || '' }
      if (route.children && route.children.length)
        menu.children = convertRoute2Menu(route.children)

      if (!menu.children?.length)
        return { ...menu, children: undefined }

      return menu
    })
  }

  const menuOptions = computed(() => {
    return convertRoute2Menu([...routes])
  })

  const activeValue = computed(() => route.name || '')

  const handleClickMenuItem = (value: MenuValue) => {
    if (value)
      router.push({ name: value as string })
  }

  return {
    menuOptions,
    activeValue,
    handleClickMenuItem,
  }
}
