import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  telegramPlatform = (window as any).Telegram.WebApp.platform
  title = 'na-sobes';

  constructor() {
    console.log('==================')
    console.log((window as any).Telegram)
    console.log('==================')
  }
}
