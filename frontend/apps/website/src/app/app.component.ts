import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
    selector: 'web-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        NavigationComponent,
        HomeComponent,
        AboutUsComponent,
        ProductComponent,
        ContactComponent,
        FooterComponent,
    ],
})
export class AppComponent {
  title = 'apps/website';
}
