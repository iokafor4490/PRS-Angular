// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Product } from 'src/model/product.class';

// @Injectable({
//     providedIn: "root"
// })

// export class ProductService {
//     url: string = "http://localhost:8080/products";

//     constructor(private http: HttpClient) { }

//     list(): Observable<Product[]> {
        
//         return this.http.get(this.url) as Observable<Vendor[]>;
//     }

//     get(id: number): Observable<Product> {
//         return this.http.get(this.url + "/" + id) as Observable<Vendor>;
//     }
      
//     save(vendor: Vendor): Observable<Vendor> {
//         return this.http.post(this.url, vendor) as Observable<Vendor>;
//     }
    
//     update(vendor: Vendor): Observable<Vendor> {
//         return this.http.put(this.url, vendor) as Observable<Vendor>;
//     }
      
//     delete(id: number): Observable<Vendor> {
//         return this.http.delete(this.url + id) as Observable<Vendor>;
    
//     }

    
    

// }