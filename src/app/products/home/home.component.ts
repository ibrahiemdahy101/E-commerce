import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: any=[];
  id: any;
  categories: any = [];
  cartProducts: any = [];
  @ViewChild('hh') pro?:ProductComponent
  constructor(private ProSrev: ProductsService, private activRout: ActivatedRoute) { 
  }
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }
  getProducts() {
    this.ProSrev.getallproducts().subscribe((res: any) => {
      this.products = res
    })
  }
  getCategories() {
    this.ProSrev.getAllCategories().subscribe((cat => {
      this.categories=cat
    }))
  }
  getCateg(event: any) {
    let keyword = event.target.value;
    keyword=='All'?this.getProducts() :this.ProSrev.getSinglCateg(keyword).subscribe((category:any) => {
      this.products = category;
    })
  }
 addTo(event: any) {
   if ("cart" in localStorage) {
    this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
     let exist = this.cartProducts.find((item: any) => { item.item.id == event.item.id })
      if (exist) {
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      } else {
        this.cartProducts.push(event)
        localStorage.setItem('cart',JSON.stringify(this.cartProducts))
     }
   } else {
      this.cartProducts.push(event)
      localStorage.setItem('cart',JSON.stringify(this.cartProducts))
  }
}
}
