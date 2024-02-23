import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from '../../../../../../libs/shared-components/src/lib/components/input-search/input-search.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, InputSearchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  polishLanguageIcon = 'assets/icons/polish-language.svg';
  englishLanguageIcon = 'assets/icons/english-language.svg';

  isEnglishLanguageSet = true;

  private _translateService = inject(TranslateService);

  switchLanguage() {
    this.isEnglishLanguageSet = !this.isEnglishLanguageSet;

    if (this.isEnglishLanguageSet) {
      this._translateService.use('english');
    } else {
      this._translateService.use('polish');
    }
  }
}
