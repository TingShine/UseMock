import { Controller, IpcHandle, IpcOn } from 'einf'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
  ) { }

  @IpcOn('system:dark-mode')
  public getSystemDarkMode(): boolean {
    return this.appService.getDarkMode()
  }

  @IpcHandle('system:notification')
  public publishNotification(title: string, body: string) {
    this.appService.sendSystemNotification(title, body)
  }
}