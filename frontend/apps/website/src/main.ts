import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { withEnabledBlockingInitialNavigation, provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideAnimations(),
        provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    ]
})
  .catch((err) => console.error(err));
