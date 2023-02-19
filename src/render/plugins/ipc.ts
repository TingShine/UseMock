const { ipcRenderer } = window
interface IElectronAPI {

}

export const electronAPI: IElectronAPI = {
  getSystemDarkMode: ipcRenderer.getSystemDarkMode,
  sendNotification: ipcRenderer.sendNotification,
}

export function useIpc() {
  return electronAPI
}
