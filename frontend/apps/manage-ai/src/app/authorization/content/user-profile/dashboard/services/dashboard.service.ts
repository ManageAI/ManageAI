import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'apps/manage-ai/src/environments/environment';
import { Observable, map } from 'rxjs';
import { Project } from '../interfaces/project.interface';
import { TaskState } from '../interfaces/task-state.interface';

@Injectable()
export class DashboardService {
  private _url = environment.url;
  private _httpClient = inject(HttpClient);

  public getTaskState(): Observable<TaskState[]> {
    return this._httpClient
      .get<Project>(`${this._url}/api/v1/project/1`)
      .pipe(map(({ taskStates }) => taskStates));
  }
}
