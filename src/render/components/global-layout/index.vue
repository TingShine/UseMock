<script setup lang="ts">
import { useAppStore } from '@render/store/appStore'
import { onMounted } from 'vue'
import type { PropType } from 'vue'
import { useMenu } from './useMenu'

defineProps({
  isShowSider: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  isShowHeader: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
})

const { menuOptions, activeValue, handleClickMenuItem } = useMenu()

const store = useAppStore()
onMounted(() => {
  store.getSystemTheme()
})
</script>

<template>
  <div class="global-layout" :class="store.systemTheme">
    <!-- 侧边栏 -->
    <div v-if="isShowSider" class="glob-slider">
      <global-sider :menu-options="menuOptions" :active-value="activeValue" :theme="store.systemTheme" @menu-click="handleClickMenuItem" />
    </div>

    <!-- 主体内容 -->
    <div class="main-container dark:bg-slate-900">
      <!-- 顶部栏 -->
      <global-header v-if="isShowHeader" github-url="https://github.com/TingShine/UseMock" />
      <!-- 背景照片 -->
      <div class="bg-image">
        <img src="@render/assets/bg.avif" alt="background image" class="h-full">
      </div>
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('./index.less');
</style>
