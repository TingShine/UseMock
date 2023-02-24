<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="text-3xl font-serif font-bold mb-2 dark:text-white">
    {{ title }}
  </div>
</template>
