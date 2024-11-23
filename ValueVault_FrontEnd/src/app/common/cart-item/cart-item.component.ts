import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent implements OnInit {
  ngOnInit(): void {
    this.calculateTotalPrice();
  }

  getProductName(): string {
    const match = this.item.product.product_title.match(/^[^[\(.|,&]+/);
    return match ? match[0].trim() : this.item.product.product_title;
  }
  
  incrementQuantity() {
    this.item.quantity++;
    this.calculateTotalPrice();
    this.quantityChanged.emit(this.item.quantity);
  }

  decrementQuantity() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
      this.calculateTotalPrice();
      this.quantityChanged.emit(this.item.quantity);
    }
  }

  calculateTotalPrice(): void {
    const priceString = this.item.product.product_price;
    const numberString = priceString.replace(/[^0-9.]/g, '');
    const unitPrice = parseFloat(numberString) || 0;
    this.totalPrice = parseFloat((unitPrice * this.item.quantity).toFixed(2));;
  }

  removeItem() {
    this.itemRemoved.emit(this.index); 
  }

  @Input() index!: number; 
  @Input() item: any;
  @Output() quantityChanged = new EventEmitter<{ index: number, quantity: number }>();
  @Output() itemRemoved = new EventEmitter<number>();
  totalPrice: number = 0;

}
