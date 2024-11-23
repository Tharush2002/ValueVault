import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';
import { OrderService } from '../../services/order-service/order.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit {
  cartItems: any[] = [];
  orderData: any = {};
  originalPrice: number = 0;
  totalPrice: number = 0;
  productPrice: number = 0;
  savingsPrice: number = 0;
  tax: number = 0;
  constructor(private cartService: CartService, private orderService: OrderService, private router:Router) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = JSON.parse(JSON.stringify(cartItems));
    });
    console.log(this.cartItems);

    this.orderService.orderData$.subscribe((orderData) => {
      this.orderData = JSON.parse(JSON.stringify(orderData));
    });
    console.log(this.orderData);
  }

  getProductName(item: any): string {
    const match = item.product.product_title.match(/^[^[\(.|,&]+/);
    return match ? match[0].trim() : item.product.product_title;
  }

  getProductTotalPrice(item: any): number {
    const priceString = item.product.product_price;
    const numberString = priceString.replace(/[^0-9.]/g, '');
    const unitPrice = parseFloat(numberString) || 0;
    return parseFloat((unitPrice * item.quantity).toFixed(2));;
  }

  clear(): void {
    this.cartService.clearCart();
    this.orderService.clearOrderData();
    this.router.navigate([""]);
    
  }
}
