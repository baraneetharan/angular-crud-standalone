import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-edit-cart-dialog',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './edit-cart-dialog.component.html',
  styleUrls: ['./edit-cart-dialog.component.css']
})
export class EditCartDialogComponent implements OnInit {


  faEdit = faEdit;
  faTrashCan = faTrashCan;
  cartForm!: FormGroup;
  inputdata: any;

  constructor(private cartService: CartService,
    public dialogRef: MatDialogRef<EditCartDialogComponent>, private buildr: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }
  ngOnInit(): void {
    this.cartForm = this.buildr.group({
      cartid: [this.data.cart.cartid],
      name: [this.data.cart.name],
      items: this.buildr.array(this.data.cart.items.map((item: { itemid: any; serialNumber: any; }) => this.buildr.group({
        itemid: [item.itemid],
        serialNumber: [item.serialNumber]
      })))
    });
  }

  addItem() {
    const newItem = this.buildr.group({
      itemid: [''],
      serialNumber: ['']
    });
    this.items.push(newItem);
  }
  get items(): FormArray {
    return this.cartForm.get('items') as FormArray;
  }

  deleteItem(id: number) {
    this.items.removeAt(id);
  }
  editItem(id: number) {
    console.log(id);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.cartService.updateCart(this.cartForm.value).subscribe(res => {
      this.dialogRef.close(this.cartForm.value);
    });
  }
    
  }
