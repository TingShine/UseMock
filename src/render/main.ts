import type { Component } from 'vue'
import { createApp } from 'vue'
import Tdesign from 'tdesign-vue-next'
import router from '@render/router'
import App from './App.vue'

import '@render/assets/main.css'
import 'tdesign-vue-next/es/style/index.css'
import 'vue-draggable-tree-next/style.css'

const app = createApp(App).use(router)

// 全局注册组件
const components = import.meta.glob('./components/**/index.vue', { eager: true })
Object.keys(components).forEach((key: string) => {
  const componentName = key.match(/\.\/components\/(.*)\/index.vue/)[1]
  if (componentName)
    app.component(componentName, (components[key] as Record<'default', Component>).default)
})

app.use(Tdesign).mount('#app')
