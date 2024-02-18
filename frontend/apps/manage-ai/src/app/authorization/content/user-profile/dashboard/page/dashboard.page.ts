import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from '../components/dashboard-header/dashboard-header.component';
import { DashboardCanbanComponent } from '../components/dashboard-canban/dashboard-canban.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [CommonModule, DashboardHeaderComponent, DashboardCanbanComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DashboardPage {}
