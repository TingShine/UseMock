<script setup lang="ts">
import { useIpc } from '@render/plugins'
import type { SubmitContext } from 'tdesign-vue-next'
import { MessagePlugin } from 'tdesign-vue-next'
import { reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'

const formData = reactive({
  name: '',
  prefix: '',
  description: '',
  isActive: true,
})

const FORM_RULES = {
  name: [
    { required: true, message: '项目名为必填项', trigger: 'blur' },
    { max: 16, message: '最多为16个字符', trigger: 'blur' },
  ],
  prefix: [
    { pattern: /^[0-9a-zA-Z_]+$/, message: '仅支持数字、英文和下划线', trigger: 'blur' },
  ],
}

const electronAPI = useIpc()

const router = useRouter()
const handleSubmit = async (result: SubmitContext) => {
  const { validateResult } = result

  if (validateResult === true) {
    const form = toRaw(formData)

    await electronAPI.createProject(form)
    MessagePlugin.success('创建成功')
    router.replace({ name: 'Project' })
  }
}

const handleCancel = () => {
  router.replace({ name: 'Project' })
}
</script>

<template>
  <div class="relative text-left">
    <global-title title="项目创建" />
    <div class="form-wrapper relative mt-16 max-w-3xl w-1/3">
      <t-form :data="formData" :rules="FORM_RULES" @submit="handleSubmit">
        <t-form-item label="项目名" name="name">
          <t-input v-model="formData.name" placeholder="请输入项目名" />
        </t-form-item>
        <t-form-item label="Api前缀" name="prefix">
          <t-input v-model="formData.prefix" palceholder="请输入Api前缀" />
        </t-form-item>
        <t-form-item label="项目描述" name="description">
          <t-textarea v-model="formData.description" placeholder="请输入项目描述" />
        </t-form-item>
        <t-form-item label="是否激活" name="active">
          <t-checkbox v-model="formData.isActive">
            激活
          </t-checkbox>
        </t-form-item>
        <t-form-item>
          <t-button class="mr-4" type="submit">
            确定
          </t-button>
          <t-button theme="default" variant="outline" @click="handleCancel">
            取消
          </t-button>
        </t-form-item>
      </t-form>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  min-width: 320px;
  left: 20%
}
</style>
