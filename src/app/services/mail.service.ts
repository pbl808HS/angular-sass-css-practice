import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MailService {
  messages = [
    {id: 0, text: 'You\'ve got a  new message'},
    {id: 1, text: 'John liked your tweet'},
    {id: 2, text: 'You\'ll never believe what John said'}
  ];

  constructor() { }

  messageUpdate(id: number, text: string): void {
    this.messages = this.messages.map(m => m.id === id ? {id, text} : m);
  }

  getMessages() {
    return this.messages;
  }
}
