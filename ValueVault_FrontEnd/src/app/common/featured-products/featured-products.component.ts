import { Component } from '@angular/core';
import { FeaturedProductComponent } from "../featured-product/featured-product.component";

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [FeaturedProductComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {

}
