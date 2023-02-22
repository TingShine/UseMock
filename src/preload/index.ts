import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld(
  'ipcRenderer',
  {
    getSystemDarkMode: () => ipcRenderer.invoke('system:dark-mode'),
    toggleSystemDarkMode: (mode: 'ststem' | 'dark' | 'light') => ipcRenderer.invoke('toggle:dark-mode', mode),
    sendNotification: (title: string, body: string) => ipcRenderer.invoke('system:notification', title, body),
    removeEventListener: ipcRenderer.removeAllListeners.bind(ipcRenderer),
  },
)
