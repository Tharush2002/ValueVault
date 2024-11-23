export class OrderItem {
    private id: number | null;
    private serialNumber: string | null;
    private productPrice: string | null;
    private productOriginalPrice: string | null;
    private starRating: string | null;
    private ratings: number | null;
    private quantity: number | null;
    private imageUrl: string | null;
    private userId: number | null;
    private orderId: number | null;
  
    // Constructor to initialize the properties
    constructor(
      id: number | null = null,
      serialNumber: string | null = null,
      productPrice: string | null = null,
      productOriginalPrice: string | null = null,
      starRating: string | null = null,
      ratings: number | null = null,
      quantity: number | null = null,
      imageUrl: string | null = null,
      userId: number | null = null,
      orderId: number | null = null
    ) {
      this.id = id;
      this.serialNumber = serialNumber;
      this.productPrice = productPrice;
      this.productOriginalPrice = productOriginalPrice;
      this.starRating = starRating;
      this.ratings = ratings;
      this.quantity = quantity;
      this.imageUrl = imageUrl;
      this.userId = userId;
      this.orderId = orderId;
    }
  
    // Getters and setters for each attribute
    getId(): number | null {
      return this.id;
    }
  
    setId(value: number | null) {
      this.id = value;
    }
  
    getSerialNumber(): string | null {
      return this.serialNumber;
    }
  
    setSerialNumber(value: string | null) {
      this.serialNumber = value;
    }
  
    getProductPrice(): string | null {
      return this.productPrice;
    }
  
    setProductPrice(value: string | null) {
      this.productPrice = value;
    }
  
    getProductOriginalPrice(): string | null {
      return this.productOriginalPrice;
    }
  
    setProductOriginalPrice(value: string | null) {
      this.productOriginalPrice = value;
    }
  
    getStarRating(): string | null {
      return this.starRating;
    }
  
    setStarRating(value: string | null) {
      this.starRating = value;
    }
  
    getRatings(): number | null {
      return this.ratings;
    }
  
    setRatings(value: number | null) {
      this.ratings = value;
    }
  
    getQuantity(): number | null {
      return this.quantity;
    }
  
    setQuantity(value: number | null) {
      this.quantity = value;
    }
  
    getImageUrl(): string | null {
      return this.imageUrl;
    }
  
    setImageUrl(value: string | null) {
      this.imageUrl = value;
    }
  
    getuserId(): number | null {
      return this.userId;
    }
  
    setuserId(value: number | null) {
      this.userId = value;
    }
  
    getOrderId(): number | null {
      return this.orderId;
    }
  
    setOrderId(value: number | null) {
      this.orderId = value;
    }
  }
  