import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '@frontend/ui-components';
import { FilterComponent } from '@frontend/ui-components';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule, FormsModule, SvgIconComponent, ButtonComponent, FilterComponent],
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeaderComponent {
  addIconSrc = 'assets/icons/add-icon.svg';

  public openModal(): void {
    console.log('clicked');
  }
}
