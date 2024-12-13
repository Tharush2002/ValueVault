import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { CartService } from '../../services/cart-service/cart.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user-service/user.service';
import Swal from 'sweetalert2';

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
  isUserSigned: boolean = false;

  constructor(private router: Router, private cartService: CartService, private userService: UserService) { }
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
    this.userService.userId$.subscribe((id: number | null) => {
      if (id !== null) {        
        this.isUserSigned = true;
      } else {
        this.isUserSigned = false;
      }      
    });
    this.cartSubscription = this.cartService.cartItems$.pipe(distinctUntilChanged()).subscribe(
      (cartItems) => {
        if (cartItems.length > 0) {
          this.itemCount = 0;
          this.totalPrice = 0;
          cartItems.forEach(item => {
            this.itemCount += item.quantity;
            this.totalPrice += this.getPrice(item.product) * item.quantity;
          })
        }
      }
    );
  }

  getPrice(item: any): number {
    const priceString = item.product_price;
    const numberString = priceString.replace(/[^0-9.]/g, '');
    return numberString ? parseFloat(numberString) : 0;
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  userLoggedOut() {
    this.userService.signOutUser();
    this.isUserSigned = false;
    Swal.fire({
      title: "Signed Out...",
      text: "You are successfully signed out...",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 2000
    });
  }
}
