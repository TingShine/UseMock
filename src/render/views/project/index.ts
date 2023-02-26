import { useIpc } from '@render/plugins'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export const useProject = () => {
  const router = useRouter()
  const electronAPI = useIpc()

  const formData = reactive({
    search: '',
    projects: [],
    pagination: {
      pageSize: 5,
      current: 1,
    },
  })

  const handleJumpCreate = () => {
    router.push({ name: 'ProjectCreate' })
  }

  const getProjects = async () => {
    const projects = await electronAPI.getAllProjects()
    formData.projects = projects
  }

  return {
    formData,
    handleJumpCreate,
    getProjects,
  }
}
