import { CartComponent } from './common/cart/cart.component';
import { CheckOutPageComponent } from './pages/check-out-page/check-out-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManageLogInPageComponent } from './pages/manage-log-in-page/manage-log-in-page.component';
import { ManageSignUpPageComponent } from './pages/manage-sign-up-page/manage-sign-up-page.component';
import { ProductSearchPageComponent } from './pages/product-search-page/product-search-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PaymentComponent } from './common/payment/payment.component';
import { OrderSummaryComponent } from './common/order-summary/order-summary.component';

export const routes: Routes = [
    {
        path: "",
        component:HomePageComponent
    },
    {
        path: "log-in",
        component:ManageLogInPageComponent
    },
    {
        path: "sign-up",
        component:ManageSignUpPageComponent
    },
    {
        path: "search-products",
        component:ProductSearchPageComponent
    },
    {
        path: "check-out",
        component:CheckOutPageComponent,
        children:[
            {
                path:"",
                component:CartComponent
            },
            {
                path:"payment",
                component:PaymentComponent
            },
            {
                path:"summary",
                component:OrderSummaryComponent
            },
        ]
    },
    {
        path: "profile",
        component: ProfilePageComponent
    }
];