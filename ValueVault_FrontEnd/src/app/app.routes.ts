import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManageLogInPageComponent } from './pages/manage-log-in-page/manage-log-in-page.component';
import { ManageSignUpPageComponent } from './pages/manage-sign-up-page/manage-sign-up-page.component';
import { ProductSearchPageComponent } from './pages/product-search-page/product-search-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];