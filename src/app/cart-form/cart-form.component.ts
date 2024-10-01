import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  faTrashCan = faTrashCan;

  cartForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private cartService: CartService
  ) {
      this.cartForm = this.fb.group({
          name: [''],
          items: this.fb.array([])
      });
  }

  ngOnInit(): void {}

  createItem(): FormGroup {
      return this.fb.group({
          serialNumber: ['']
      });
  }

  addItem(): void {
      const items = this.cartForm.get('items') as FormArray;
      items.push(this.createItem());
  }

  removeItem(index: number) {
    const items = this.cartForm.get('items') as FormArray;
    items.removeAt(index);
  }

  onSubmit(): void {
      console.log(this.cartForm.value);
      alert(this.cartForm.value);
      const cart: Cart = this.cartForm.value;
      if (cart.cartid) {
          this.cartService.updateCart(cart).subscribe();
      } else {
          this.cartService.createCart(cart).subscribe();
      }
  }

  get items() {
      return this.cartForm.get('items') as FormArray;
  }
}
