import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { HeaderComponent } from './header/header.component';
import { CartListComponent } from './cart-list/cart-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, EventFormComponent,CartFormComponent,CartListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-crud-standalone';
}
