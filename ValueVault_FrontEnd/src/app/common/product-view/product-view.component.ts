import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  @Input() product: any = null;

  @Output() closeEvent = new EventEmitter<void>();

  constructor(private cartService: CartService) { }

  getProductName(): string {
    return this.product.name.split(/[,|]/)[0];
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
    this.cartService.addToCart([this.product, this.quantity]);
    this.closeEvent.emit(); 
  }
}
