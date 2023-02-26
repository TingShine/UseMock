import { ICreateProjectParams } from "@main/network/project/dto/create-project.dto"
import { IProjectItem } from "@main/network/project/dto/project.dto"

declare global {
  interface Window {
    ipcRenderer: {
      getAllProjects: () => IProjectItem[]
      createProject: (params: ICreateProjectParams) => IProjectItem,
      toggleSystemDarkMode: (mode: 'ststem' | 'dark' | 'light') => 'dark' | 'light',
      getSystemDarkMode: () => 'light' | 'dark',
      sendNotification: (title: string, body: string) => void,
      removeEventListener: () => void
    }
  }
}

export { }
