import { ChangeDetectionStrategy, Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '@frontend/ui-components';
import { FilterComponent } from '@frontend/ui-components';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddTaskModalComponent } from '../../../../../../../core/components/modals/add-task-modal/add-task-modal.component';
import { FilterModalComponent } from 'apps/manage-ai/src/core/components/modals/filter-modal/filter-modal.component';

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
export class DashboardHeaderComponent implements OnInit {
  addIconSrc = 'assets/icons/add-icon.svg';

  isTablet: boolean = false;

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

  private _dialog = inject(MatDialog);

  @HostListener('window:resize', ['$event']) onResize() {
    this._checkScreenSize();
  }

  public ngOnInit(): void {
    this._checkScreenSize();
  }

  private _checkScreenSize(): void {
    this.isTablet = window.innerWidth <= 992;
  }

  public openFilterModal(): void {
    const modalRef = this._dialog.open(FilterModalComponent, {
      height: '250px',
      width: '600px',
    });

    modalRef.afterClosed().subscribe((x) => {
      console.log(x);
    });
  }

  public openAddTaskModal(): void {
    const modalRef = this._dialog.open(AddTaskModalComponent, {
      height: '200px',
      width: '500px',
    });

    modalRef.afterClosed().subscribe((x) => {
      console.log(x);
    });
  }
}
