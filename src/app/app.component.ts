import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  telegramPlatform = (window as any).Telegram.WebApp.platform
  title = 'na-sobes';
}
