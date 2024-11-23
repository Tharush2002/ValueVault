export class User {
    id: number | null | undefined; // Allow id to be null
    public firstName: string | null; // Allow firstName to be null
    public lastName: string | null; // Allow lastName to be null
    email: string; // Mandatory field
    userName: string; // Mandatory field
    password: string; // Mandatory field
    public address: string | null; // Allow address to be null
    public dateOfBirth: string | null; // Allow dateOfBirth to be null
    public registrationDate: string; // Allow registrationDate to be null
  
    constructor(
      id: number | null | undefined,
      firstName: string | null,
      lastName: string | null,
      email: string,
      userName: string,
      password: string,
      address: string | null,
      dateOfBirth: string | null,
      registrationDate: string
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.userName = userName;
      this.password = password;
      this.address = address;
      this.dateOfBirth = dateOfBirth;
      this.registrationDate = registrationDate;
    }
  
    // Getters and setters
    getId(): number | null | undefined {
      return this.id;
    }
  
    setId(id: number | null): void {
      this.id = id;
    }
  
    getFirstName(): string | null {
      return this.firstName;
    }
  
    setFirstName(firstName: string | null): void {
      this.firstName = firstName;
    }
  
    getLastName(): string | null {
      return this.lastName;
    }
  
    setLastName(lastName: string | null): void {
      this.lastName = lastName;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    setEmail(email: string): void {
      this.email = email;
    }
  
    getUserName(): string {
      return this.userName;
    }
  
    setUserName(userName: string): void {
      this.userName = userName;
    }
  
    getPassword(): string {
      return this.password;
    }
  
    setPassword(password: string): void {
      this.password = password;
    }
  
    getAddress(): string | null {
      return this.address;
    }
  
    setAddress(address: string | null): void {
      this.address = address;
    }
  
    getDateOfBirth(): string | null {
      return this.dateOfBirth;
    }
  
    setDateOfBirth(dateOfBirth: string | null): void {
      this.dateOfBirth = dateOfBirth;
    }
  
    getRegistrationDate(): string {
      return this.registrationDate;
    }
  
    setRegistrationDate(registrationDate: string): void {
      this.registrationDate = registrationDate;
    }
  }
  