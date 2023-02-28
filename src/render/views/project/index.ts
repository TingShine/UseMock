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
      total: 0,
    },
  })

  const handleJumpCreate = () => {
    router.push({ name: 'ProjectCreate' })
  }

  const getProjects = async () => {
    const params = {
      name: formData.search,
      pageSize: formData.pagination.pageSize,
      page: formData.pagination.current,
    }
    const { total, data } = await electronAPI.getProjects(params)
    formData.projects = data
    formData.pagination.total = total
  }

  return {
    formData,
    handleJumpCreate,
    getProjects,
  }
}
