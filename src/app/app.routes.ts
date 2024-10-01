import { Routes } from '@angular/router';
import { CartFormComponent } from './cart-form/cart-form.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EditCartDialogComponent } from './edit-cart-dialog/edit-cart-dialog.component';

export const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'event', component: EventFormComponent },
    { path: 'cartlist', component: CartListComponent },
    { path: 'cart', component: CartFormComponent },
    { path: 'edit/:id', component: EditCartDialogComponent },
    { path: 'home', component: AppComponent }
];
