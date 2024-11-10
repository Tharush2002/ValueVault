import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ManageLogInPageComponent } from './pages/manage-log-in-page/manage-log-in-page.component';
import { ManageSignUpPageComponent } from './pages/manage-sign-up-page/manage-sign-up-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./common/header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, ManageLogInPageComponent, ManageSignUpPageComponent, HttpClientModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ValueVault_FrontEnd';
}
