declare global {
  interface Window {
    ipcRenderer: {
      toggleSystemDarkMode: (mode: 'ststem' | 'dark' | 'light') => 'dark' | 'light',
      getSystemDarkMode: () => 'light' | 'dark',
      sendNotification: (title: string, body: string) => void,
      removeEventListener: () => void
    }
  }
}

export { }
