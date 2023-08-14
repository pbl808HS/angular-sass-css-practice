import {Component, Inject, OnInit} from '@angular/core';
import {MailService} from "../../services/mail.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit{
  title = 'messages';
  mail: any;

  constructor(
    private mailService: MailService
  ) {
  }
  ngOnInit() {
    this.mail = this.mailService.getMessages();
  }
  onUpdate(id: number, e: any) {
    this.mailService.messageUpdate(id, e.data.text);
    console.log(this.mailService.messages);
  }

}
