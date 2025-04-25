import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private proSrv: ProductsService) { }
  carts: any[] = [];
  products: any;
ngOnInit(): void {
  this.getCarts();
  this.getProducts();
}
  getCarts() {
    this.proSrv.getAllCarts().subscribe((res:any) => {
      this.carts = res;
      console.log(this.carts)
    })
  }

  getProducts() {
    this.proSrv.getallproducts().subscribe((res: any) => {
      this.products = res;
      console.log(this.products)
    })
  }
  deletP(index: any) {
    this.products.splice(index, 1);
  }
}
