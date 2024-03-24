import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '@frontend/ui-components';
import { FilterComponent } from '@frontend/ui-components';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddTaskModalComponent } from '../../../../../../../core/components/add-task-modal/add-task-modal.component';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SvgIconComponent,
    ButtonComponent,
    FilterComponent,
    MatDialogModule,
  ],
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeaderComponent {
  addIconSrc = 'assets/icons/add-icon.svg';

  mockData = [
    {
      id: '1',
      img: 'assets/icons/person.svg',
      firstName: 'Jerzy',
      lastName: 'Kukulka',
      name: 'Jerzy Kukulka',
    },
    {
      id: '2',
      img: 'assets/icons/person.svg',
      firstName: 'Andrzej',
      lastName: 'Piernik',
      name: 'Andrzej Piernik',
    },
    {
      id: '3',
      img: 'assets/icons/person.svg',
      firstName: 'Janina',
      lastName: 'Koras',
      name: 'Janina Koras',
    },
    {
      id: '4',
      img: 'assets/icons/person.svg',
      firstName: 'Lulu',
      lastName: 'Papajo',
      name: 'Lulu Papajo',
    },
  ];

  mockDataTags = [
    { id: '1', name: 'Chores' },
    { id: '2', name: 'Food' },
    { id: '3', name: 'Smoke' },
  ];

  constructor(public dialog: MatDialog) {}

  public openModal(): void {
    const modalRef = this.dialog.open(AddTaskModalComponent, {
      height: '200px',
      width: '500px',
    });

    modalRef.afterClosed().subscribe((x) => {
      console.log(x);
    });
  }
}
