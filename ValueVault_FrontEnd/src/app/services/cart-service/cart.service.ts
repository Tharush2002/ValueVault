import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'userCart';
  private cartSubject = new BehaviorSubject<any[]>(this.getCartItems());
  cartItems$ = this.cartSubject.asObservable();

  addToCart(item: any) {
    const currentCart = this.getCartItems();
    for (let index = 0; index < currentCart.length; index++) {
      const element = currentCart[index].product;
      if (item.product.asin === element.asin) {
        currentCart[index].quantity+=item.quantity;
        this.cartSubject.next(currentCart);
        sessionStorage.setItem(this.cartKey, JSON.stringify(currentCart));
        return;
      } else {
        continue;
      }
    }
    currentCart.push(item);
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

  saveCart(): void {
    const currentCartItems = this.cartSubject.getValue();
    sessionStorage.setItem(this.cartKey, JSON.stringify(currentCartItems));
  }

  updateCart(newCart: any[]): void {
    this.cartSubject.next(newCart);
    sessionStorage.setItem(this.cartKey, JSON.stringify(newCart));
  }
}