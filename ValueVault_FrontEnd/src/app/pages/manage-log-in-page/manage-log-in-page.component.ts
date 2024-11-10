import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";
import { LogInComponent } from "../../common/log-in/log-in.component";

@Component({
  selector: 'app-manage-log-in-page',
  standalone: true,
  imports: [HeaderComponent, LogInComponent],
  templateUrl: './manage-log-in-page.component.html',
  styleUrl: './manage-log-in-page.component.css'
})
export class ManageLogInPageComponent {

}
