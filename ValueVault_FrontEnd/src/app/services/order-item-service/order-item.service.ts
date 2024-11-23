import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CartService } from '../cart-service/cart.service';
import { OrderItem } from '../../modals/OrderItem.model';
import { OrderService } from '../order-service/order.service';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  constructor(private http: HttpClient, private orderService: OrderService, private userService: UserService) { }
  // cartItems: any[]=[];

  async saveOrderItems(cartItems: any[]): Promise<void> {
    try {
      await firstValueFrom(this.http.post<void>('http://localhost:8080/order-items/save', this.mapOrderItems(cartItems)));
    } catch (error) {
      throw error;
    }
  }

  // async loadCartItems(): Promise<void> {
  //   try {
  //     const cartItems = await firstValueFrom(this.cartService.cartItems$);
  //     this.cartItems = JSON.parse(JSON.stringify(cartItems));
  //   } catch (error) {
  //     console.error('Error loading cart items:', error);
  //   }
  // }

  private mapOrderItems(cartItems :any[]): OrderItem[]{
    const orderItems: OrderItem[] = [];
    console.log(this.userService.getCurrentUserId());
    console.log(this.orderService.getOrderDetails().id);
    
    
    cartItems.forEach((item)=>{
      orderItems.push(new OrderItem(null,item.product.asin,item.product.product_price,item.product.product_original_price,item.product.product_star_rating,item.product.product_num_ratings,item.quantity,item.product.product_photo,this.userService.getCurrentUserId(),this.orderService.getOrderDetails().id))
    })
    return orderItems;
  }
}
