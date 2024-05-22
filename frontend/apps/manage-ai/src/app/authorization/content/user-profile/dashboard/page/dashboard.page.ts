import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from '../components/dashboard-header/dashboard-header.component';
import { DashboardCanbanComponent } from '../components/dashboard-canban/dashboard-canban.component';
import { Observable } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';
import { TaskState } from '../interfaces/task-state.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [CommonModule, DashboardHeaderComponent, DashboardCanbanComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardPage implements OnInit {
  taskStates$!: Observable<TaskState[]>;

  private _dashboardService = inject(DashboardService);

  public ngOnInit(): void {
    this.taskStates$ = this._dashboardService.getTaskState();
  }
}
