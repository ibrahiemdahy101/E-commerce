import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  id: any;
  product: any = {};
  quantity: number = 0;
  constructor(private activeRout:ActivatedRoute,private service:ProductsService) {
    this.id = this.activeRout.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
      this.getProduct()
  }
  getProduct() {
    this.service.getSigleProduct(this.id).subscribe((pro: any) => {
      this.product = pro
    })
  }

  addAmount() {
    this.quantity++
  }
  minAmount() {
    if (this.quantity == 0) {
     this.quantity=0
    } else {
    this.quantity--
   }
  }
}
