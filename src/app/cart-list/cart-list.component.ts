import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrashAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EditCartDialogComponent } from '../edit-cart-dialog/edit-cart-dialog.component';


@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule,EditCartDialogComponent,FontAwesomeModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent implements OnInit {
  faEdit = faEdit;
  faTrashCan = faTrashCan;
  carts: Cart[] = [];

  constructor(public dialog: MatDialog,private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getCarts().subscribe((data: Cart[]) => {
      this.carts = data;
      console.log(this.carts);
    });
  }

  addNewCart(): void {
    this.router.navigate(['/add']);
  }

  editCart(cartId: number): void {
    this.router.navigate(['/edit', cartId]);
  }

  deleteCart(id: number): void {
    this.cartService.deleteCart(id).subscribe(() => {
      this.carts = this.carts.filter(cart => cart.cartid !== id);
    });
  }

  openEditDialog(cart:any): void {
    const dialogRef = this.dialog.open(EditCartDialogComponent, {
      width: '80%',
      data: {cart: cart, title: 'Edit Cart'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.carts.findIndex(c => c.cartid === result.cartid);
        if (index !== -1) {
          this.carts[index] = result;
        }
      }
    });
  }

  

}
