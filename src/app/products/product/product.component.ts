import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() prod: any = {};
  @Output() itempro = new EventEmitter();
  amount = 3;  
  add() {
    let obj = { item: this.prod, quantity: this.amount };
    this.itempro.emit(obj);
  }
}
