<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GlobalCard',
})
</script>

<template>
  <div class="max-w-sm font-sans rounded-xl text-left overflow-hidden border-gray-100 border-2 hover:shadow-lg dark:bg-blue-50">
    <slot />
  </div>
</template>
