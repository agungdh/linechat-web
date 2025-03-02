import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {WebSocketService} from '../../web-socket.service';

@Component({
    selector: 'app-default',
    imports: [
        RouterLink
    ],
    templateUrl: './default.component.html',
    styleUrl: './default.component.css'
})
export class DefaultComponent implements OnInit {
  private webSocketService: WebSocketService = inject(WebSocketService);

  ngOnInit() {
    console.log('ngOnInit: it should authenticated');
  }
}
