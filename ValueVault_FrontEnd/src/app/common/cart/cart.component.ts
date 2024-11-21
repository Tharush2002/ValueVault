import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { CartService } from '../../services/cart-service/cart.service';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  // private cartSubscription!: Subscription;
  cartItems: any[] = [];
  originalPrice: number = 0;
  productPrice: number = 0;
  savingsPrice: number = 0;
  totalPrice: number = 0;
  tax: number = 0;
  isUpdateAvailable: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = JSON.parse(JSON.stringify(cartItems));
    });
    this.calculateSavings();
    this.calculateTotalPrice();

    console.log(this.cartItems);    
  }

  updateQuantity(event: { index: number, quantity: number }): void {
    if (!this.isUpdateAvailable) {
      this.isUpdateAvailable = true;
    }
    const { index, quantity } = event;
    if (this.cartItems[index]) {
      this.cartItems[index].quantity = quantity;
    }
    // console.log(this.cartItems);
  }

  removeItem(index: number) {
    if (!this.isUpdateAvailable) {
      this.isUpdateAvailable = true;
    }
    this.cartItems.splice(index, 1);
  }

  calculateOriginalPrice(): void {
    this.originalPrice = 0;
    this.cartItems.forEach(item => {
      const priceString = item.product.product_original_price;
      const numberString = priceString ? priceString.replace(/[^0-9.]/g, '') : item.product.product_price.replace(/[^0-9.]/g, '');
      const unitPrice = parseFloat(numberString) || 0;
      this.originalPrice += parseFloat((unitPrice * item.quantity).toFixed(2));;
    })
  }

  calculateSavings(): void {
    this.calculateOriginalPrice();
    this.calculateProductPrice();
    this.savingsPrice = this.originalPrice - this.productPrice;
  }

  calculateProductPrice(): void {
    this.productPrice = 0;    
    this.cartItems.forEach(item => {
      const priceString = item.product.product_price;
      const numberString = priceString.replace(/[^0-9.]/g, '');
      const unitPrice = parseFloat(numberString) || 0;
      this.productPrice += parseFloat((unitPrice * item.quantity).toFixed(2));;
    })
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.productPrice + this.tax;
  }

  saveCart(): void {
    if (this.isUpdateAvailable) {
      this.isUpdateAvailable = false;
    }
    this.cartService.updateCart(this.cartItems);
    this.ngOnInit();
  }

  resetCart() {
    this.ngOnInit();
    if (this.isUpdateAvailable) {
      this.isUpdateAvailable = false;
    }
  }
}
