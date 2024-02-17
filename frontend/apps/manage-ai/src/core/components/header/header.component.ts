import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from '../../../../../..//libs/shared-components/src/lib/components/input-search/input-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, InputSearchComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
