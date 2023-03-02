import type { IpcResponse } from '@common/types'
import { MessagePlugin } from 'tdesign-vue-next'
const { ipcRenderer } = window

type IpcFunction<T> = (...args: any[]) => void | T | Promise<IpcResponse<T>>

const wrapIpcFunc = (func: IpcFunction<any>) => {
  return async function (...args: any[]) {
    const result: IpcResponse<any> = await func(...args)
    const { data, error } = result

    if (error) {
      MessagePlugin.error(error.toString())
      throw new Error(error.toString())
    }

    // console.log(data);

    return data
  }
}

const apis = ['getSystemDarkMode', 'sendNotification', 'toggleSystemDarkMode', 'createProject', 'getProjects', 'changeProjectStatus'] as const
const createElectronAPI = (): { [K in typeof apis[number]]?: IpcFunction<any> } => {
  const electronAPI = {}
  apis.forEach((key) => {
    electronAPI[key] = wrapIpcFunc(ipcRenderer[key])
  })

  return electronAPI
}

export function useIpc() {
  return createElectronAPI()
}
