import {Product} from './product'
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

 @Injectable({
     providedIn: 'root'
 })
export class ProductService{
    public  getProducts() {
 
        let products:Product[];
 
        products=[
            new Product(101,'SAMSUNG',8500),
            new Product(102,'VIVO',7500),
            new Product(103,'OPPO',6500),
            new Product(104,'APPLE',10500),
        ]
 
        return products;               
    }
    private subject = new Subject<any>();
    sendclickevent(){
        this.subject.next('');
    }
    getclickevent():Observable<any>{
        return this.subject.asObservable();
    }
}