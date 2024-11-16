import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-check-out-page',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './check-out-page.component.html',
  styleUrl: './check-out-page.component.css'
})
export class CheckOutPageComponent {

}
