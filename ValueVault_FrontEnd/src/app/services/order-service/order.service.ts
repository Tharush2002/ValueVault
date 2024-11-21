import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderKey = 'order';
  private orderSubject = new BehaviorSubject<{ [key: string]: any }>(this.getOrderDetails());
  orderData$ = this.orderSubject.asObservable();

  getOrderDetails(): any[] {
    const cart = sessionStorage.getItem(this.orderKey);
    return cart ? JSON.parse(cart) : {};
  }

  clearOrderData() {
    sessionStorage.removeItem(this.orderKey);
    this.orderSubject.next({});
  }

  saveOrderData(order: { [key: string]: any }): void {
    sessionStorage.setItem(this.orderKey, JSON.stringify(order));
    this.orderSubject.next(order);
  }
}
