<script setup lang="ts">
import { useAppStore } from '@render/store/appStore'
import type { PropType } from 'vue'
import { onMounted } from 'vue'

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

const store = useAppStore()
onMounted(() => {
  store.getSystemTheme()
})
</script>

<template>
  <div class="global-layout">
    <!-- 侧边栏 -->
    <div v-if="isShowSider" class="glob-slider">
      <global-sider />
    </div>

    <!-- 主体内容 -->
    <div class="main-container">
      <!-- 顶部栏 -->
      <global-header v-if="isShowHeader" />
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('./index.less');
</style>
