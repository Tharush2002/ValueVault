import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart-service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  @Input() product: any = null;

  @Output() closeEvent = new EventEmitter<void>();

  constructor(private cartService: CartService) { }

  getProductName(): string {
    const match = this.product.product_title.match(/^[^(\[|.,]+/);
    return match ? match[0].trim() : this.product.product_title;
  }

  quantity: number = 1;

  increaseQuantity() {
    this.quantity += 1;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  addToCart() {
    this.cartService.addToCart({
      product: this.product,
      quantity: this.quantity
    });
    this.closeEvent.emit(); 
  }
}
