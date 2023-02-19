const { ipcRenderer } = window

const wrapIpcFunc = (func) => {
  return async function (): Promise<any> {
    const { data, error } = await func()

    if (error)
      throw new Error(error.toString())

    return data
  }
}

const apis = ['getSystemDarkMode', 'sendNotification']
const createElectronAPI = () => {
  const electronAPI = {}
  apis.forEach((key) => {
    electronAPI[key] = wrapIpcFunc(ipcRenderer[key])
  })

  return electronAPI
}

export function useIpc() {
  return createElectronAPI()
}
