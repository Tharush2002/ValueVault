export class LoginRequest {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(value: string): void {
    this.email = value;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(value: string): void {
    this.password = value;
  }
}
