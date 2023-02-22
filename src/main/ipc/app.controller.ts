import { Controller, IpcHandle } from 'einf'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
  ) { }

  @IpcHandle('system:dark-mode')
  public getSystemDarkMode(): boolean {
    return this.appService.getDarkMode()
  }

  @IpcHandle('toggle:dark-mode')
  public toggleSystemDarkMode(mode: 'light' | 'dark' | 'system') {
    if (!['light', 'dark', 'system'].includes(mode))
      return new Error('Invalid parameter')

    return this.appService.toggleThemeSource(mode)
  }

  @IpcHandle('system:notification')
  public publishNotification(title: string, body: string) {
    this.appService.sendSystemNotification(title, body)
  }
}
