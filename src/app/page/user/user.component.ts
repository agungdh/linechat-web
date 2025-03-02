import {Component} from '@angular/core';
import {DefaultComponent} from "../../layout/default/default.component";

@Component({
  selector: 'app-user',
  imports: [
    DefaultComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
