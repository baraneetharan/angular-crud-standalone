import { Component } from '@angular/core';
import { CartFormComponent } from '../cart-form/cart-form.component';
import { EventFormComponent } from '../event-form/event-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,EventFormComponent,CartFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
