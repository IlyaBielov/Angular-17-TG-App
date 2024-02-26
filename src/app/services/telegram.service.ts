import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TgButton } from '../models/telegram';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private window;
  private tg;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.window = this._document.defaultView;
    this.tg = (this.window as any).Telegram.WebApp;
  }

  get MainButton(): TgButton {
    return this.tg.MainButton;
  }

  get BackButton(): TgButton {
    return this.tg.BackButton;
  }

  sendData(data: object): void {
    this.tg.sendData(JSON.stringify(data));
  }

  ready() {
    this.tg.ready();
  }
}
