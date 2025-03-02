import {Component, inject, Input, OnInit} from '@angular/core';
import {WebSocketService} from '../../web-socket.service';
import {DefaultComponent} from '../../layout/default/default.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [
    DefaultComponent,
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  private webSocketService: WebSocketService = inject(WebSocketService);

  message: string = '';

  ngOnInit() {
    this.webSocketService.getMessages().subscribe((messages: any) => {
      console.log(messages);
    })
  }

  sendChat() {
    console.log('sendChat', this.message);
    this.webSocketService.sendMessage(this.message)
  }
}
