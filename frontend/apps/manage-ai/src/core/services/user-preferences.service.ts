import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesService {
  public setDarkMode(isDarkMode: boolean): void {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }
}
