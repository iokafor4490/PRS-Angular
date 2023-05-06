import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor.class';

@Injectable({
    providedIn: "root"
})

export class VendorService {
    url: string = "http://localhost:8080/vendors";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Vendor[]> {
        
        return this.http.get(this.url) as Observable<Vendor[]>;
    }

    getbyId(id: number): Observable<Vendor> {
        return this.http.get(this.url + "/" + id) as Observable<Vendor>;
    }
      
    create(vendor: Vendor): Observable<Vendor> {
        return this.http.post(this.url, vendor) as Observable<Vendor>;
    }
    
    update(vendor: Vendor): Observable<Vendor> {
        return this.http.put(this.url, vendor) as Observable<Vendor>;
    }
      
    delete(id: number): Observable<Vendor> {
        return this.http.delete(this.url + "/" + id) as Observable<Vendor>;
    
    }

    
    

}