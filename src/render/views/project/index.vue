<script lang="ts" setup>
import { AddIcon } from 'tdesign-icons-vue-next'
import ProjectCard from './components/project-card.vue'
</script>

<template>
  <div>
    <!-- header -->
    <div class="flex justify-start">
      <global-title title="项目管理" />
    </div>
    <div class="flex justify-end">
      <div class="flex items-end w-1/3">
        <t-input class="mr-4" />
        <t-button theme="success">
          <template #icon>
            <AddIcon />
          </template>
          新建
        </t-button>
      </div>
    </div>
    <div class="flex flex-wrap justify-between mt-8">
      <ProjectCard title="express-mock" status="success" />
      <ProjectCard title="express-mock" status="failure" />
      <ProjectCard title="express-mock" status="unactive" />
      <ProjectCard title="express-mock" status="unactive" />
      <ProjectCard title="express-mock" status="unactive" />
      <ProjectCard title="express-mock" status="unactive" />
    </div>
  </div>
</template>
