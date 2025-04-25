import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProduct: any[] = [];
  total: any = 0;
  ngOnInit(): void {
    this.getCart();
    this.getTotal();
}
  getTotal() {
    this.total = 0;
    for (let x in this.cartProduct) {
      this.total+=this.cartProduct[x].item.price*this.cartProduct[x].quantity
    }
}
  getCart() {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
      console.log(this.cartProduct)
    }
  }
  addAmount(index:any) {
    this.cartProduct[index].quantity++;
    this.getTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProduct))
  }

  minAmount(index: any) {
    if (this.cartProduct[index].quantity == 0) {
      this.cartProduct[index].quantity = 0;
    } else {
      this.cartProduct[index].quantity--
    }
    this.getTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProduct))
  }
  delet(index:any) {
    this.cartProduct.splice(index, 1);
    this.getTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProduct))
  }
}
