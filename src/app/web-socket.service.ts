import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Ensures singleton instance
})
export class WebSocketService {
  private socket!: WebSocket;
  private messageSubject = new Subject<any>();
  private isConnected = false;

  constructor() {
    this.connect();
  }

  private connect() {
    if (!this.isConnected) {
      this.socket = new WebSocket('ws://localhost:8080/ws');

      this.socket.onopen = () => {
        console.log('WebSocket connected');
        this.isConnected = true;
      };

      this.socket.onmessage = (event) => {
        this.messageSubject.next(event.data);
      };

      this.socket.onclose = () => {
        console.log('WebSocket disconnected, attempting to reconnect...');
        this.isConnected = false;
        setTimeout(() => this.connect(), 3000); // Reconnect after 3 seconds
      };

      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
        this.socket.close(); // Force reconnect
      };
    }
  }

  sendMessage(message: any) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket is not open. Message not sent.');
    }
  }

  getMessages(): Observable<any> {
    return this.messageSubject.asObservable();
  }
}
