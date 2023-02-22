<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  status: {
    type: String as PropType<'success' | 'failure' | 'unactive'>,
    default: 'success',
  },
})
</script>

<template>
  <global-card class="w-80 p-0 pt-6">
    <div class="font-bold px-4">
      {{ title }}
    </div>
    <div class="relative flex justify-center mt-8">
      <div class="relative z-40 w-11/12 bg-white h-40 border-2 border-b-0 rounded-xl" :class="`inner-card-${status}`" />
      <div class="absolute z-30 w-10/12 bg-gray-200 h-full -top-2 left-1/2 -translate-x-1/2 rounded-xl" />
      <div class="absolute z-20 w-9/12 bg-gray-100 h-full -top-4 left-1/2 -translate-x-1/2 rounded-xl" />
    </div>
  </global-card>
</template>

<style lang="less" scoped>
.inner-card {
  &-success {
    border-top: 1px solid #3ac27d;
  }

  &-failure {
    border-top: 1px solid red;
  }

  &-unactive {
    border-top: 1px solid gray;
  }
}
</style>
