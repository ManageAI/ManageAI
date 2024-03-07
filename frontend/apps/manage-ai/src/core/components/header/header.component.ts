import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from '@frontend/ui-components';
import { TranslateService } from '@ngx-translate/core';
import { UserPreferencesService } from '../../services/user-preferences.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, InputSearchComponent, SvgIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  polishLanguageIcon = 'assets/icons/polish-language.svg';
  englishLanguageIcon = 'assets/icons/english-language.svg';

  isEnglishLanguageSet = true;
  isDarkMode = false;

  private _translateService = inject(TranslateService);
  private _userPreferencesService = inject(UserPreferencesService);

  public switchLanguage(): void {
    this.isEnglishLanguageSet = !this.isEnglishLanguageSet;

    if (this.isEnglishLanguageSet) {
      this._translateService.use('english');
    } else {
      this._translateService.use('polish');
    }
  }

  public setDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    this._userPreferencesService.setDarkMode(this.isDarkMode);
  }
}
