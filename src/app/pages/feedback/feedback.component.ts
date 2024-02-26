import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  template: `
    <form class="centered form">
      <h2 class="mb">Feed Back</h2>
      <textarea class="form-control" [value]="feedback()" (input)="handleChange($event)"></textarea>
    </form>
  `,
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedback = signal('');

  telegram = inject(TelegramService);

  constructor() {
    this.sendData = this.sendData.bind(this);
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText('Send message');
    this.telegram.MainButton.hide();
    this.telegram.MainButton.onClick(this.sendData);
  }

  handleChange($event: any) {
    this.feedback.set($event.target.value);

    if (this.feedback().trim()) {
      this.telegram.MainButton.show();
    } else {
      this.telegram.MainButton.hide();
    }
  }

  sendData(): void {
    this.telegram.sendData({ feedback: this.feedback() });
  }

  ngOnDestroy(): void {
    this.telegram.MainButton.offClick(this.sendData);
  }
}
