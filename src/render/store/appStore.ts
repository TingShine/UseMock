import { useIpc } from '@render/plugins'
import { defineStore } from 'pinia'

const electronAPI = useIpc()

export const useAppStore = defineStore('app', {
  state() {
    return {
      themeMode: 'system',
      systemTheme: 'dark',
    }
  },
  actions: {
    async getSystemTheme() {
      const isUseDark = await electronAPI.getSystemDarkMode()
      this.systemTheme = isUseDark ? 'dark' : 'light'
    },
    async toggleTheme(mode: 'system' | 'dark' | 'light') {
      if (this.themeMode !== mode) {
        this.themeMode = mode
        this.systemTheme = await electronAPI.toggleSystemDarkMode(mode)
      }
    },
  },
})
