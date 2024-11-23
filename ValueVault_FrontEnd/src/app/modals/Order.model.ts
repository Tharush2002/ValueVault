export class Order {
    public id: number | null;
    private userId: number | null;
    private name: string;
    private email: string;
    private city: string;
    private country: string;
    private phoneNumber: string;
    private addressLine1: string;
    private addressLine2: string | null;
    private stateProvince: string;
    private zipCode: string;
    private landMarks: string | null;
    private deliveryType: string;
    private paymentType: string;
    private productPrice: number;
    private tax: number;
    public totalPrice: number;
    public date: string;
  
    constructor(
      userId: number | null,
      name: string,
      email: string,
      city: string,
      country: string,
      phoneNumber: string,
      addressLine1: string,
      addressLine2: string | null,
      stateProvince: string,
      zipCode: string,
      landMarks: string | null,
      deliveryType: string,
      paymentType: string,
      productPrice: number,
      tax: number,
      totalPrice: number,
      date: string,
      id: number | null = null
    ) {
      this.id = id;
      this.userId = userId;
      this.name = name;
      this.email = email;
      this.city = city;
      this.country = country;
      this.phoneNumber = phoneNumber;
      this.addressLine1 = addressLine1;
      this.addressLine2 = addressLine2;
      this.stateProvince = stateProvince;
      this.zipCode = zipCode;
      this.landMarks = landMarks;
      this.deliveryType = deliveryType;
      this.paymentType = paymentType;
      this.productPrice = productPrice;
      this.tax = tax;
      this.totalPrice = totalPrice;
      this.date = date;
    }
  
    // Getters and Setters
    getId(): number | null {
      return this.id;
    }
  
    setId(id: number | null): void {
      this.id = id;
    }
  
    getUserId(): number | null {
      return this.userId;
    }
  
    setUserId(userId: number | null): void {
      this.userId = userId;
    }
  
    getName(): string {
      return this.name;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    setEmail(email: string): void {
      this.email = email;
    }
  
    getCity(): string {
      return this.city;
    }
  
    setCity(city: string): void {
      this.city = city;
    }
  
    getCountry(): string {
      return this.country;
    }
  
    setCountry(country: string): void {
      this.country = country;
    }
  
    getPhoneNumber(): string {
      return this.phoneNumber;
    }
  
    setPhoneNumber(phoneNumber: string): void {
      this.phoneNumber = phoneNumber;
    }
  
    getAddressLine1(): string {
      return this.addressLine1;
    }
  
    setAddressLine1(addressLine1: string): void {
      this.addressLine1 = addressLine1;
    }
  
    getAddressLine2(): string | null {
      return this.addressLine2;
    }
  
    setAddressLine2(addressLine2: string | null): void {
      this.addressLine2 = addressLine2;
    }
  
    getStateProvince(): string {
      return this.stateProvince;
    }
  
    setStateProvince(stateProvince: string): void {
      this.stateProvince = stateProvince;
    }
  
    getZipCode(): string {
      return this.zipCode;
    }
  
    setZipCode(zipCode: string): void {
      this.zipCode = zipCode;
    }
  
    getLandMarks(): string | null {
      return this.landMarks;
    }
  
    setLandMarks(landMarks: string | null): void {
      this.landMarks = landMarks;
    }
  
    getDeliveryType(): string {
      return this.deliveryType;
    }
  
    setDeliveryType(deliveryType: string): void {
      this.deliveryType = deliveryType;
    }
  
    getPaymentType(): string {
      return this.paymentType;
    }
  
    setPaymentType(paymentType: string): void {
      this.paymentType = paymentType;
    }
  
    getProductPrice(): number {
      return this.productPrice;
    }
  
    setProductPrice(productPrice: number): void {
      this.productPrice = productPrice;
    }
  
    getTax(): number {
      return this.tax;
    }
  
    setTax(tax: number): void {
      this.tax = tax;
    }
  
    getTotalPrice(): number {
      return this.totalPrice;
    }
  
    setTotalPrice(totalPrice: number): void {
      this.totalPrice = totalPrice;
    }
  
    getDate(): string {
      return this.date;
    }
  
    setDate(date: string): void {
      this.date = date;
    }
  }
  