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

  getProductPrice(): any {    
    if (this.product.price) {
      return this.product.price;
    }else if(this.product.price_per_unit){
      return this.product.price_per_unit;
    }else if(this.product.list_price){
      return this.product.list_price;
    }else if(this.product.more_buying_choices.offer_text){
      const match = this.product.more_buying_choices.offer_text.match(/\d+(\.\d{1,2})?/);
      return match[0];
    }else{
      return 0;
    }
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
