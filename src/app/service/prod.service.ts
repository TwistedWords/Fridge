import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  patchValue(data: any) {
    throw new Error('Method not implemented.');
  }
  controls: any;

  constructor( private _http: HttpClient ) { }


  addFood(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/products', data);
  }

  updateFood(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/products/${id}`, data);
  }

  getFood(): Observable<any> {
    return this._http.get('http://localhost:3000/products');
  }

  deleteFood (id:number): Observable<any> {
    return this._http.delete(`http://localhost:3000/products/${id}`)
  }





}
