<script lang="ts" setup>
import { AddIcon } from 'tdesign-icons-vue-next'
import { onMounted } from 'vue'
import ProjectCard from './components/project-card.vue'
import { useProject } from '.'

const { handleJumpCreate, getProjects, formData } = useProject()

onMounted(() => {
  getProjects()
})
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
        <t-button theme="success" @click="handleJumpCreate">
          <template #icon>
            <AddIcon size="large" />
          </template>
          新建
        </t-button>
      </div>
    </div>
    <div class="flex flex-wrap justify-between mt-8">
      <ProjectCard v-for="project in formData.projects" :key="project.id" :title="project.name" :status="project.status" :project-id="project.id" />
    </div>
  </div>
</template>
