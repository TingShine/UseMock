import { IProject, ISearchProjectParams, wrapList } from "@common/types"
import { ICreateProjectParams } from "@main/network/project/dto/create-project.dto"

declare global {
  interface Window {
    ipcRenderer: {
      getProjects: (params?: ISearchProjectParams) => Promise<wrapList<IProject>>
      createProject: (params: ICreateProjectParams) => Promise<IProject>,
      changeProjectStatus: (id: string) =>Promise<IProject>,
      toggleSystemDarkMode: (mode: 'ststem' | 'dark' | 'light') => 'dark' | 'light',
      getSystemDarkMode: () => 'light' | 'dark',
      sendNotification: (title: string, body: string) => void,
      removeEventListener: () => void
    }
  }
}

export { }
