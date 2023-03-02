import type { ISearchProjectParams } from '@common/types'
import type { ICreateProjectParams } from '@main/network/project/dto/create-project.dto'
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld(
  'ipcRenderer',
  {
    deleteProject: () => ipcRenderer.invoke('project:delete'),
    getProjects: (params: ISearchProjectParams) => ipcRenderer.invoke('project:fetch', params),
    createProject: (params: ICreateProjectParams) => ipcRenderer.invoke('project:create', params),
    changeProjectStatus: (id: string) => ipcRenderer.invoke('project:change-status', id),
    getSystemDarkMode: () => ipcRenderer.invoke('system:dark-mode'),
    toggleSystemDarkMode: (mode: 'ststem' | 'dark' | 'light') => ipcRenderer.invoke('toggle:dark-mode', mode),
    sendNotification: (title: string, body: string) => ipcRenderer.invoke('system:notification', title, body),
    removeEventListener: ipcRenderer.removeAllListeners.bind(ipcRenderer),
  },
)
