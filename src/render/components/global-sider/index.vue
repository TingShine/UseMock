<script lang="ts" setup>
import { ref } from 'vue'

const collapsed = ref(false)
const handleCollapse = () => {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div class="w-full h-full">
    <t-menu theme="dark" :collapsed="collapsed">
      <template #logo>
        <span class="text-lg text-white  align-center">Use Mock</span>
      </template>

      <t-menu-item>测试</t-menu-item>
      <template #operations>
        <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click="handleCollapse">
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
