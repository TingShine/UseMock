import { homedir } from 'os'
import { join } from 'path'
import { app, session } from 'electron'
import { createEinf } from 'einf'
// import { nestBootstrap } from './network'
import { AppController } from './ipc/app.controller'
import { createWindow } from './main.window'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

async function electronAppInit() {
  const isDev = !app.isPackaged
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
      app.exit()
  })

  if (isDev) {
    if (process.platform === 'win32') {
      process.on('message', (data) => {
        if (data === 'graceful-exit')
          app.exit()
      })
    }
    else {
      process.on('SIGTERM', () => {
        app.exit()
      })
    }

    const vueuDevToolsPath = join(homedir(), '/Library/Application Support/Google/Chrome/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/6.5.0_0')
    app.whenReady().then(async () => {
      await session.defaultSession.loadExtension(vueuDevToolsPath)
    })
  }
}

async function bootstrap() {
  try {
    await electronAppInit()

    // await nestBootstrap()

    await createEinf({
      window: createWindow,
      controllers: [AppController],
      injects: [{
        name: 'IS_DEV',
        inject: !app.isPackaged,
      }],
    })
  }
  catch (error) {
    console.error(error)
    app.quit()
  }
}

bootstrap()
