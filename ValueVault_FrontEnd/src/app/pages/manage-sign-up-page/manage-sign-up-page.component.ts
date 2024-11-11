import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";
import { SignUpComponent } from "../../common/sign-up/sign-up.component";

@Component({
  selector: 'app-manage-sign-up-page',
  standalone: true,
  imports: [HeaderComponent, SignUpComponent],
  templateUrl: './manage-sign-up-page.component.html',
  styleUrl: './manage-sign-up-page.component.css'
})
export class ManageSignUpPageComponent {

}
