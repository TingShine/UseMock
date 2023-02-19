import { useIpc } from '@render/plugins'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state() {
    return {
      userThemeMode: 'system',
      systemTheme: 'dark',
    }
  },
  getters: {
    currentTheme() {
      return this.systemTheme === 'system' ? this.systemTheme : this.userThemeMode
    },
  },
  actions: {
    async getSystemTheme() {
      const electronAPI = useIpc()
      this.systemTheme = await electronAPI.getSystemDarkMode()
    },
  },
})
