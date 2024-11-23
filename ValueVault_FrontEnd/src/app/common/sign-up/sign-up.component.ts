import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user-service/user.service';
import { User } from '../../modals/User.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private userService: UserService, private router: Router) { }

  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (form.checkValidity()) {
      if ((form.querySelector('#password') as HTMLInputElement).value === (form.querySelector('#confirmPassword') as HTMLInputElement).value) {
        const email = (form.querySelector('#email') as HTMLInputElement).value;
        const userName = (form.querySelector('#userName') as HTMLInputElement).value;
        const password = (form.querySelector('#password') as HTMLInputElement).value;

        try {
          await this.userService.saveUser(new User(null, null, null, email, userName, password, null, null, this.getTodayDate()));
          Swal.fire({
            icon: "success",
            title: "Your account has been created",
            showConfirmButton: false,
            timer: 2000,
            allowOutsideClick: false,
            allowEscapeKey: false
          }).then(() => {
            this.router.navigate(['']);
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Failed to save user",
            text: "An error occurred while saving the user. Please try again.",
            showConfirmButton: false,
            timer: 3000
          });
          form.reset();
        }

      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Passwords Do Not Match!",
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
  }
}
