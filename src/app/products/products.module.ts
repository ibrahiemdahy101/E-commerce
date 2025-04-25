import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    HomeComponent,
    DetailsComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
