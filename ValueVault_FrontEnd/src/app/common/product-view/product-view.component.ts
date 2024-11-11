import { NgIf } from '@angular/common';
import { Component, Inject, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  @Input() product: any = null;

  getProductName(): string {
    return this.product.name.split(/[,|]/)[0];
  }
}
