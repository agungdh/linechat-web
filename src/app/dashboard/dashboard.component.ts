import { Component } from '@angular/core';
import {DefaultComponent} from "../layout/default/default.component";

@Component({
  selector: 'app-dashboard',
    imports: [
        DefaultComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
