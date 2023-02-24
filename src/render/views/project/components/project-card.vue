<script setup lang="ts">
import type { PropType } from 'vue'
import { ref } from 'vue'

defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  status: {
    type: String as PropType<'success' | 'failure' | 'unactive'>,
    default: 'success',
  },
  projectId: {
    type: String as PropType<string>,
    default: '',
  },
})

const operations = ref([
  { content: '详情', value: 'info' },
  { content: '删除', value: 'delete', theme: 'error' },
])

const handleOperation = (item) => {
  const { value } = item

  switch (value) {
    case 'info':
      break
    case 'delete':
      break
  }
}
</script>

<template>
  <global-card class="w-80 p-0 pt-6 mb-8 hover:scale-105">
    <div class="flex justify-between px-4">
      <div class="font-bold text-xl">
        {{ title }}
        <p class="text-sm text-gray-300 font-sans font-medium">
          {{ projectId }}
        </p>
      </div>
      <div>
        <t-button v-if="status !== 'success'" shape="circle" variant="text" size="large" class="hover:text-green-500">
          <template #icon>
            <t-icon name="play-circle-filled" size="large" />
          </template>
        </t-button>
        <t-button v-else shape="circle" variant="text" size="large" class="hover:text-red-500">
          <template #icon>
            <t-icon name="pause-circle-filled" size="large" />
          </template>
        </t-button>
        <t-dropdown :options="operations" :min-column-width="50" @click="handleOperation">
          <t-icon name="ellipsis" size="large" class="ml-1 hover:cursor-pointer" />
        </t-dropdown>
      </div>
    </div>

    <div class="relative group flex justify-center mt-8  ">
      <div class="relative z-40 w-11/12 bg-white h-40 border-2 border-b-0 rounded-xl p-2" :class="`inner-card-${status}`" />
      <div class="absolute group-hover:animate-pulse z-30 w-10/12 bg-gray-200 h-full -top-2 left-1/2 -translate-x-1/2 rounded-xl" />
      <div class="absolute group-hover:animate-pulse z-20 w-9/12 bg-gray-100 h-full -top-4 left-1/2 -translate-x-1/2 rounded-xl" />
    </div>
  </global-card>
</template>

<style lang="less" scoped>
.inner-card {
  &-success {
    border-top: 2px solid #3ac27d;
  }

  &-failure {
    border-top: 2px solid red;
  }

  &-unactive {
    border-top: 2px solid gray;
  }
}
</style>
