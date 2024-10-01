import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CartListComponent } from './app/cart-list/cart-list.component';
import { CartFormComponent } from './app/cart-form/cart-form.component';
import { EventListComponent } from './app/event-list/event-list.component';
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
