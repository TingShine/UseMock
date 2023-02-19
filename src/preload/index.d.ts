declare global {
  interface Window {
    ipcRenderer: {
      getSystemDarkMode: () => 'light' | 'dark',
      sendNotification: (title: string, body: string) => void,
      removeEventListener: () => void
    }
  }
}

export { }
