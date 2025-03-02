import {Routes} from '@angular/router';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {UserComponent} from './page/user/user.component';
import {ChatComponent} from './page/chat/chat.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
