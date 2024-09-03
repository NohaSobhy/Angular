import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent , title: 'home'},
  { path: 'products', component: ProductsComponent , title: 'products'},
  { path: 'login', component: LoginComponent , title: 'login'},
  { path: '**', component: NotFoundComponent , title: 'not found'},
];

// to scroll to the top
// @NgModule({
//   imports: [RouterModule.forRoot(routes.{scrollPositionRestoration: 'enabled'})],
//   exports:[RouterModule],
// })