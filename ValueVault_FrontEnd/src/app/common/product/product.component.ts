import { Component, Input } from '@angular/core';
import { ProductViewComponent } from '../product-view/product-view.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  private _product: any;  
  public productName: string = '';
  
  @Input() 
  set product(value: any) {
    this._product = value;
    if (value && value.name) {
      this.productName = value.name.split(/[,|]/)[0]; 
    }
  }

  get product(): any {
    return this._product;
  }
}
