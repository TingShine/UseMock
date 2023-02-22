<script lang="ts" setup>
import type { MenuValue } from 'tdesign-vue-next'
import type { PropType } from 'vue'
import { ref } from 'vue'

defineProps({
  theme: {
    type: String as PropType<'dark' | 'light'>,
    default: 'light',
  },
  menuOptions: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  activeValue: {
    type: String as PropType<string>,
    default: '',
  },
})

const $emit = defineEmits(['menuClick'])

const collapsed = ref(false)
const handleCollapse = () => {
  collapsed.value = !collapsed.value
}

const handleClickMenuItem = (value: MenuValue) => {
  $emit('menuClick', value)
}
</script>

<template>
  <div class="w-full h-full" :class="{ dark: theme === 'dark' }">
    <t-menu :value="activeValue" :theme="theme" :collapsed="collapsed" @change="handleClickMenuItem">
      <template #logo>
        <span class="text-2xl font-bold font-serif text-black dark:text-white align-center">Use Mock</span>
      </template>

      <template v-for="menu in menuOptions" :key="menu.path">
        <t-submenu v-if="menu.children" :title="menu.title">
          <template #icon>
            <t-icon :name="menu.icon" />
          </template>
          <t-menu-item v-for="child in menu.children" :key="child.path" :value="child.name">
            <template #icon>
              <t-icon :name="child.icon" />
            </template>
            {{ child.title }}
          </t-menu-item>
        </t-submenu>
        <t-menu-item v-else :value="menu.name">
          <template #icon>
            <t-icon :name="menu.icon" />
          </template>
          {{ menu.title }}
        </t-menu-item>
      </template>
      <template #operations>
        <t-button class="dark:text-white hover:text-white dark:hover:text-black text-black dark:hover:bg-slate-200 hover:bg-slate-500 border-transparent" variant="text" shape="square" @click="handleCollapse">
          <template #icon>
            <t-icon name="view-list" />
          </template>
        </t-button>
      </template>
    </t-menu>
  </div>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
