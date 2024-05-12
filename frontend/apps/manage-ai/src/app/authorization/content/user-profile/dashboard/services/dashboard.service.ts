import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'apps/manage-ai/src/environments/environment';

@Injectable()
export class DashboardService {
  private _url = environment.url;

  private _httpClient = inject(HttpClient);

  public getTaskState() {
    return this._httpClient.get(`${this._url}/api/v1/project/2`);
  }
}
