import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ProductViewComponent } from '../product-view/product-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductViewComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product: any;
  selectedProduct: any = null;

  constructor() { }

  openProductModal(): void {
    if (this.product) {
      this.selectedProduct = this.product;
      setTimeout(() => {
        const productViewModal = document.getElementById('productView') as HTMLDialogElement;
        if (productViewModal) {
          productViewModal.showModal();
        } else {
          console.error("Modal element not found.");
        }
      }, 0);
    } else {
      console.error("Product is undefined!");
    }
  }

  closeModal() {
    const productViewModal = document.getElementById('productView') as HTMLDialogElement;
    productViewModal.close();
    this.selectedProduct = null;
  }

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

  handleAddToCart() {
    this.closeModal();
  }
}
