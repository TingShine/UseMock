import type { IpcResponse } from '@common/types'
const { ipcRenderer } = window

type IpcFunction<T> = (...args: any[]) => void | T | Promise<IpcResponse<T>>

const wrapIpcFunc = (func: IpcFunction<any>) => {
  return async function (...args: any[]) {
    const result: IpcResponse<any> = await func(...args)
    const { data, error } = result

    if (error)
      throw new Error(error.toString())

    return data
  }
}

const apis = ['getSystemDarkMode', 'sendNotification', 'toggleSystemDarkMode'] as const
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
