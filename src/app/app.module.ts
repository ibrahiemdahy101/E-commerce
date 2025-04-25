import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { UpdatComponent } from './admin/product/updat/updat.component';
import { EditComponent } from './admin/product/edit/edit.component';
import { AdminComponent } from './admin/admin/admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UpdatComponent,
    EditComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule, 
    UserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
