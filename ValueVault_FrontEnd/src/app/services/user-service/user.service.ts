import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  firstValueFrom,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { User } from '../../modals/User.model';
import { LoginRequest } from '../../modals/LoginRequest.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userKey = 'userID';
  private userIdSubject = new BehaviorSubject<number | null>(
    this.getStoredUserId()
  );
  userId$ = this.userIdSubject.asObservable();

  constructor(private http: HttpClient) {}

  async saveUser(user: User): Promise<void> {
    try {
      const userID: number = await firstValueFrom(
        this.http.post<number>('http://localhost:8080/user/save', user)
      );
      this.userIdSubject.next(userID);
      sessionStorage.setItem(this.userKey, userID.toString());
    } catch (error) {
      throw error;
    }
  }

  async updateUser(user: User): Promise<void> {
    try {
      await firstValueFrom(
        this.http.put<void>(`http://localhost:8080/user/update`, user)
      );
    } catch (error) {
      throw error;
    }
  }

  async getUserById(): Promise<User | null> {
    try {
      const user = await firstValueFrom(
        this.http.get<User>(`http://localhost:8080/user/find-by-id/${this.getCurrentUserId()}`)
      );
      return user; 
    } catch (error) {
      throw error;
    }
  }

  private getStoredUserId(): number | null {
    const storedUserId = sessionStorage.getItem(this.userKey);
    console.log(storedUserId);
    console.log('SessionStorage userKey:', sessionStorage.getItem(this.userKey));

    return storedUserId ? parseInt(storedUserId, 10) : null;
  }

  signOutUser(): void {
    this.userIdSubject.next(null);
    sessionStorage.removeItem(this.userKey);
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const loginRequest = new LoginRequest(email, password);
      const userId: number | null = await firstValueFrom(
        this.http.post<number>(
          'http://localhost:8080/log-in/is-found',
          loginRequest
        )
      );

      if (userId !== null) {
        this.userIdSubject.next(userId);
        sessionStorage.setItem(this.userKey, userId.toString());
      }
    } catch (error) {
      throw error;
    }
  }

  getCurrentUserId(): number | null {
    return this.userIdSubject.value;
  }
}
