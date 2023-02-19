import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld(
  'ipcRenderer',
  {
    getSystemDarkMode: (msg: string) => ipcRenderer.send('system:dark-mode', msg),
    sendNotification: (title: string, body: string) => ipcRenderer.invoke('system:notification', title, body),
    removeEventListener: ipcRenderer.removeAllListeners.bind(ipcRenderer),
  },
)
