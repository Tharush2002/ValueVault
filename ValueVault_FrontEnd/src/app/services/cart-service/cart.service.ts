import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'userCart';
  private cartSubject = new BehaviorSubject<any[]>(this.getCartItems());
  cartItems$ = this.cartSubject.asObservable();

  addToCart(product: any) {
    const currentCart = this.getCartItems();
    for (let index = 0; index < currentCart.length; index++) {
      const element = currentCart[index][0];
      if (product[0].asin === element.asin) {
        currentCart[index][1]+=product[1];
        this.cartSubject.next(currentCart);
        sessionStorage.setItem(this.cartKey, JSON.stringify(currentCart));
        return;
      } else {
        continue;
      }
    }
    currentCart.push(product);
    this.cartSubject.next(currentCart);
    sessionStorage.setItem(this.cartKey, JSON.stringify(currentCart));
  }

  getCartItems(): any[] {
    const cart = sessionStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  clearCart() {
    sessionStorage.removeItem(this.cartKey);
    this.cartSubject.next([]);
  }
}