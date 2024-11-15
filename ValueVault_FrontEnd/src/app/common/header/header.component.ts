import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { CartService } from '../../services/cart-service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleDarkMode() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  searchTerm: string = '';
  private cartSubscription!: Subscription;
  itemCount: number = 0;
  totalPrice: number = 0;
  isDarkMode: boolean = false;

  constructor(private router: Router, private cartService: CartService) { }
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  triggerSearch(): void {
    this.saveSearchTerm();
    this.navigateToSearch();
  }

  saveSearchTerm(): void {
    sessionStorage.setItem('searched-term', this.searchTerm);
    this.search.emit(this.searchTerm);
  }

  navigateToSearch(): void {
    this.router.navigate(['/search-products']);
  }

  ngOnInit() {
    this.cartSubscription = this.cartService.cartItems$.pipe(distinctUntilChanged()).subscribe(
      (cartItems) => {
        if (cartItems.length > 0) {
          this.itemCount = 0;
          this.totalPrice = 0;
          cartItems.forEach(item => {
            this.itemCount += item[1];
            this.totalPrice += item[0].price * item[1];
          })
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
