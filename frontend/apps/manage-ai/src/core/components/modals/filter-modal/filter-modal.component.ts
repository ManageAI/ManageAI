import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '@frontend/ui-components';
import { FilterComponent } from '@frontend/ui-components';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent, FilterComponent],
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent {
  private _modalRef = inject(DialogRef);

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

  public confirm() {
    this._modalRef.close();
  }
}
