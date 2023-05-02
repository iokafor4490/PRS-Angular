import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
    providedIn: "root"
})

export class ProductService {
    url: string = "http://localhost:8080/products";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Product[]> {
        
        return this.http.get(this.url) as Observable<Product[]>;
    }

    getbyId(id: number): Observable<Product> {
        return this.http.get(this.url + "/" + id) as Observable<Product>;
    }
      
    create(vendor: Product): Observable<Product> {
        return this.http.post(this.url, vendor) as Observable<Product>;
    }
    
    update(vendor: Product): Observable<Product> {
        return this.http.put(this.url, vendor) as Observable<Product>;
    }
      
    delete(id: number): Observable<Product> {
        return this.http.delete(this.url + id) as Observable<Product>;
    
    }

    
    

}