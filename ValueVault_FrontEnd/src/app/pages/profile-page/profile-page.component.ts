import { Component } from '@angular/core';
import { ProfileComponent } from "../../common/profile/profile.component";
import { HeaderComponent } from "../../common/header/header.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileComponent, HeaderComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}
