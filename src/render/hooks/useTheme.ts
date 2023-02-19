import { useIpc } from '@render/plugins'
import { ref } from 'vue'

export type ITheme = 'light' | 'dark' | 'system'
const theme = ref<ITheme>('light')

export const useDark = () => {
  const electronAPI = useIpc()

  const getSystemTheme = (): ITheme => {
    return electronAPI.getSystemTheme()
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    theme,
    getSystemTheme,
    toggleTheme,
  }
}
