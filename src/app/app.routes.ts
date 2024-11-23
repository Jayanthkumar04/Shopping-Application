import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'about page',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart page',
  },
];
