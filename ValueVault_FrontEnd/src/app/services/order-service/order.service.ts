import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Order } from '../../modals/Order.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderKey = 'order';
  private orderSubject = new BehaviorSubject<Order | null>(this.getOrderDetails());
  orderData$ = this.orderSubject.asObservable();

  constructor(private http: HttpClient) { }

  getOrderDetails(): Order {
    const order = sessionStorage.getItem(this.orderKey);
    return order ? JSON.parse(order) : Order;
  }

  clearOrderData() {
    sessionStorage.removeItem(this.orderKey);
    this.orderSubject.next(null);
  }

  async saveOrderData(order: Order): Promise<void> {
    try {
      const orderID: number = await firstValueFrom(this.http.post<number>('http://localhost:8080/order/save', order));
      order.setId(orderID);
      this.orderSubject.next(order);
      sessionStorage.setItem(this.orderKey, JSON.stringify(order));
    } catch (error) {
      throw error;
    }   
  }

  async getOrdersByUserId(userId: number): Promise<Order[] | null> {
    try {
      const orders: Order[] = await firstValueFrom(
        this.http.get<Order[]>(`http://localhost:8080/order/find-by-user-id/${userId}`)
      );
      return orders;
    } catch (error) {
      throw error;
    }
  }
}
