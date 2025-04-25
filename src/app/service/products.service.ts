import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string='https://fakestoreapi.com/products'
  constructor(private _http:HttpClient) { }
  
  getSigleProduct(id:any) {
    return this._http.get(`${this.url}/${id}`)
  }
  getallproducts() {
    return this._http.get(`${this.url}`)

  }
  getAllCategories() {
    return this._http.get(`${this.url}/${ 'categories'}`)
  }
  getSinglCateg(keyword:string) {
   return this._http.get(`${this.url}/${'category'}/${keyword}`)
  }

  getAllCarts() {
    return this._http.get(`${'https://fakestoreapi.com'}/${'carts'}`)
  }

  updateProduct(id:any,pr:any) {
    return this._http.put(`${'https://fakestoreapi.com/products'}/${id}`,pr)
  }
}
