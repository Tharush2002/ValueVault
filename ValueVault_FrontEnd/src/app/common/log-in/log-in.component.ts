import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  constructor(private userService: UserService, private router: Router){}

  async onSubmit(event: Event) {    
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (form.checkValidity()) {
      const email = (form.querySelector('#email') as HTMLInputElement).value;
      const password = (form.querySelector('#password') as HTMLInputElement)
        .value;
      
      console.log(email+" - "+password);
      
      try {
        await this.userService.login(email,password);
        if(this.userService.getCurrentUserId()){
          Swal.fire({
            icon: "success",
            title: "Log-In Successful..",
            showConfirmButton: false,
            timer: 2000,
            allowOutsideClick: false,
            allowEscapeKey: false
          }).then(() => {
            this.router.navigate(['']);
          });
        }else{
          Swal.fire({
            icon: "error",
            title: "No user Found..",
            text: "No user found in the database, check the credentials",
            showConfirmButton: false,
            timer: 3000
          });
          form.reset();
        }        
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Log-In Failed..',
          text: 'An error occurred while log-in. Please try again.',
          showConfirmButton: false,
          timer: 3000,
        });
        form.reset();
      }
    }
  }
}
