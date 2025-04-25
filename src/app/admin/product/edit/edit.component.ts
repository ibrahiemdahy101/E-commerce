import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id: any;
  product: any = {};
  form!: FormGroup;
  constructor(private actRout: ActivatedRoute, private proServe: ProductsService,private router:Router,private build:FormBuilder) { 
    this.id = this.actRout.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    this.getPro();
    this.form = this.build.group({
      title: [''],
      price: [''],
      description: [''],
      image: [''],
      category: ['']
    })
  }
  getPro(){
    this.proServe.getSigleProduct(this.id).subscribe((res: any) => {
      this.product=res
    })
  }

  update() {
    const model = this.form.value;
    this.proServe.updateProduct(this.id, model).subscribe(() => {
      console.log(model);
      alert('product updated')
    })
  }
}
