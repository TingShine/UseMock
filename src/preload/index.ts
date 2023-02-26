import type { ICreateProjectParams } from '@main/network/project/dto/create-project.dto'
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld(
  'ipcRenderer',
  {
    deleteProject: () => ipcRenderer.invoke('project:delete'),
    getAllProjects: () => ipcRenderer.invoke('project:fetch'),
    createProject: (params: ICreateProjectParams) => ipcRenderer.invoke('project:create', params),
    getSystemDarkMode: () => ipcRenderer.invoke('system:dark-mode'),
    toggleSystemDarkMode: (mode: 'ststem' | 'dark' | 'light') => ipcRenderer.invoke('toggle:dark-mode', mode),
    sendNotification: (title: string, body: string) => ipcRenderer.invoke('system:notification', title, body),
    removeEventListener: ipcRenderer.removeAllListeners.bind(ipcRenderer),
  },
)
