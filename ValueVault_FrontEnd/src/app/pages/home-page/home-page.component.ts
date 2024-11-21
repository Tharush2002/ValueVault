import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { HeroComponent } from '../../common/hero/hero.component';
import { FeaturesComponent } from "../../common/features/features.component";
import { FeaturedProductsComponent } from "../../common/featured-products/featured-products.component";
import { FooterComponent } from "../../common/footer/footer.component";
import { NewsletterComponent } from "../../common/newsletter/newsletter.component";
import { CallToActionBannersComponent } from "../../common/call-to-action-banners/call-to-action-banners.component";
import { initFlowbite } from 'flowbite';
import { DiscountBanner1Component } from "../../common/discount-banner/discount-banner.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, FeaturesComponent, FeaturedProductsComponent, FooterComponent, NewsletterComponent, CallToActionBannersComponent, DiscountBanner1Component],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
