import { Route } from '@angular/router';
import { DashboardPage } from './dashboard/page/dashboard.page';
import { StatisticsComponent } from './statistics/statistics.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';

export const userProfileRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPage,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
