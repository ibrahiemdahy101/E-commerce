import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { DetailsComponent } from './products/details/details.component';
import { CartModule } from './cart/cart.module';
import { HomeComponent } from './products/home/home.component';
import { UpdatComponent } from './admin/product/updat/updat.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EditComponent } from './admin/product/edit/edit.component';

const routes: Routes = [
  { path: "products", loadChildren: () => import('./products/products.module').then((module)=>module.ProductsModule)},
  { path: "", redirectTo: 'products', pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(module => module.CartModule) },
  { path: 'admin', component: AdminComponent },
  {path:"admin/product/edit/:id",component:EditComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
