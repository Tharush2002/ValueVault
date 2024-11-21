import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  addressLine1: string = '';
  addressLine2: string = '';
  stateProvince: string = '';
  zipCode: string = '';
  landMarks: string = '';
  city: string = '';
  email: string = '';
  name: string = '';
  paymentType: string = '';
  deliveryType: string = '';
  Data:any;
  // paypalEmail: string = '';

  constructor(private cartService: CartService) { }

  cartItems: any[] = [];

  countryCode: string = '';

  isCreditCardChecked: boolean = true;
  isPaypalChecked: boolean = false;

  originalPrice: number = 0;
  productPrice: number = 0;
  savingsPrice: number = 0;
  totalPrice: number = 0;
  tax: number = 0;
  paymentTax: number = 0;
  shippingTax: number = 0;

  country: string = '';
  phoneNumberWithoutCountryCode: string = '';

  expiryDate: string = '';

  countries: any = [
    { "name": "Sri Lanka", "code": "+94" },
    { "name": "United States", "code": "+1" },
    { "name": "France", "code": "+33" },
    { "name": "Spain", "code": "+34" },
    { "name": "United Kingdom", "code": "+44" },
    { "name": "Australia", "code": "+61" },
    { "name": "India", "code": "+91" },
    { "name": "Russia", "code": "+7" },
    { "name": "China", "code": "+86" },
    { "name": "Africa", "code": "+27" },
    { "name": "Japan", "code": "+81" }
  ]

  onCountrySelected(event: any): void {
    const selectedValue = event.target.value;
    const selectedCountry = this.countries.find((country: { name: string; code: string; }) => country.name === selectedValue);
    this.countryCode = selectedCountry ? selectedCountry.code : '';

    const selectElement = event.target as HTMLSelectElement;
    this.country = selectElement.value;
  }

  expressDeliveryChecked() {
    this.deliveryType = "Express Delivery";
    this.shippingTax = 49;
    this.calculateTotalTax();
    this.calculatePrices();
  }

  dhlFastDeliveryChecked() {
    this.deliveryType = "DHL Fast Delivery";
    this.shippingTax = 15;
    this.calculateTotalTax();
    this.calculatePrices();
  }

  freeDeliveryChecked() {
    this.deliveryType = "Free Delivery - FedEx";
    this.shippingTax = 0;
    this.calculateTotalTax();
    this.calculatePrices();
  }

  calculateTotalTax(): void {
    this.tax = this.paymentTax + this.shippingTax;
  }

  PaypalChecked() {
    this.paymentType = "Paypal";
    this.isCreditCardChecked = false;
    this.isPaypalChecked = true;
    this.paymentTax = 0;
    this.calculateTotalTax();
    this.calculatePrices();
  }

  PaymentOnDeliveryChecked() {
    this.paymentType = "Payment On Delivery";
    this.isCreditCardChecked = false;
    this.isPaypalChecked = false;
    this.paymentTax = 15;
    this.calculateTotalTax();
    this.calculatePrices();
  }

  CreditCardChecked() {
    this.paymentType = "Credit Card";
    this.isCreditCardChecked = true;
    this.isPaypalChecked = false;
    this.paymentTax = 0;
    this.calculateTotalTax();
    this.calculatePrices();
  }

  ngOnInit(): void {
    this.calculatePrices();
    this.country = "United States";
    this.countryCode = "+1";
    this.paymentType = "Credit Card";
    this.deliveryType = 'Free Delivery - FedEx';
  }

  calculatePrices(): void {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = JSON.parse(JSON.stringify(cartItems));
    });
    this.calculateSavings();
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.productPrice + this.tax;
  }

  calculateSavings(): void {
    this.calculateOriginalPrice();
    this.calculateProductPrice();
    this.savingsPrice = this.originalPrice - this.productPrice;
  }

  calculateOriginalPrice(): void {
    this.originalPrice = 0;
    this.cartItems.forEach(item => {
      const priceString = item.product.product_original_price;
      const numberString = priceString ? priceString.replace(/[^0-9.]/g, '') : item[0].product_price.replace(/[^0-9.]/g, '');
      const unitPrice = parseFloat(numberString) || 0;
      this.originalPrice += parseFloat((unitPrice * item.quantity).toFixed(2));;
    })
  }

  calculateProductPrice(): void {
    this.productPrice = 0;
    this.cartItems.forEach(item => {
      const priceString = item.product.product_price;
      const numberString = priceString.replace(/[^0-9.]/g, '');
      const unitPrice = parseFloat(numberString) || 0;
      this.productPrice += parseFloat((unitPrice * item.quantity).toFixed(2));;
    })
  }

  formatExpiry(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    }
    if (value.length > 5) {
      value = value.substring(0, 5);
    }
    input.value = value;
    this.expiryDate = value;
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const key = event.key;
    if (!/^\d$/.test(key)) {
      event.preventDefault();
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (form.checkValidity()) {
      this.name = (form.querySelector('#your_name') as HTMLInputElement).value;
      this.email = (form.querySelector('#your_email') as HTMLInputElement).value;
      this.city = (form.querySelector('#your_city') as HTMLInputElement).value;
      this.phoneNumberWithoutCountryCode = (form.querySelector('#your_tel') as HTMLInputElement).value;
      this.addressLine1 = (form.querySelector('#your_address') as HTMLInputElement).value;
      this.addressLine2 = (form.querySelector('#your_address_secondary') as HTMLInputElement).value;
      this.stateProvince = (form.querySelector('#your_stateProvince') as HTMLInputElement).value;
      this.zipCode = (form.querySelector('#your_zip_code') as HTMLInputElement).value;
      this.landMarks = (form.querySelector('#your_landmarks') as HTMLInputElement).value;

      const phoneNumber = this.countryCode+this.phoneNumberWithoutCountryCode;
    
      this.Data = {
        name: this.name,
        email: this.email,
        city: this.city,
        phoneNumber: phoneNumber,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        stateProvince: this.stateProvince,
        zipCode: this.zipCode,
        landMarks: this.landMarks,
        deliveryType: this.deliveryType,
        paymentType: this.paymentType,
        originalPrice: this.originalPrice,
        savings: this.savingsPrice,
        tax: this.tax,
        totalPrice: this.totalPrice
      }
      console.log('Form submitted successfully!', this.Data);
    } else {
      // If the form is not valid, trigger the native validation error messages
      form.reportValidity();
    }
  }
}
