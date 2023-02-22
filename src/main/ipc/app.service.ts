import { Injectable } from 'einf'
import { Notification, nativeTheme } from 'electron'

@Injectable()
export class AppService {
  /** 获取暗黑模式 */
  public getDarkMode(): boolean {
    console.log(nativeTheme.shouldUseDarkColors)
    return nativeTheme.shouldUseDarkColors
  }

  public toggleThemeSource(mode: 'system' | 'dark' | 'light'): 'light' | 'dark' {
    nativeTheme.themeSource = mode
    return nativeTheme.shouldUseDarkColors ? 'dark' : 'light'
  }

  /** 发送系统通知 */
  public sendSystemNotification(title: string, body: string): void {
    new Notification({ title, body }).show()
  }
}
