import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from '@frontend/ui-components';
import { SvgIconComponent } from 'angular-svg-icon';
import { ProfileDropdownDirective } from '../profile-dropdown/profile-dropdown.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, InputSearchComponent, SvgIconComponent, ProfileDropdownDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
