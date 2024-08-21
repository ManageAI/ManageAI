import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { NavbarConstants } from '../../constants/navbar.constants';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, SvgIconComponent, TranslateModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  navbarLinks = NavbarConstants.navbarLinks;
  selectedLink!: string;

  constructor(private _router: Router) {}

  public ngOnInit(): void {
    this.selectedLink = this._checkRouting();
  }

  private _checkRouting(): string {
    const url = this._router.url;
    const route = this.navbarLinks.find(({ name }) => url.includes(name));

    return route?.name ?? 'dashboard';
  }

  public selectLink(linkName: string): void {
    this.selectedLink = linkName;

    //TODO: it will require to implement more flexible method for other profiles like ceo and clients
    this._router.navigateByUrl('user-profile/' + linkName);
  }
}
