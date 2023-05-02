import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from '../model/line-item.class';


@Injectable({
    providedIn: 'root'
  })
  export class LineItemService {
    url: string = "http://localhost:8080/line-items";

    constructor(private http: HttpClient) { }

    getAll(id: number): Observable<LineItem> {
      return this.http.get(this.url + "lines-for-pr/" + id) as Observable<LineItem>;
    }

    get(id: number): Observable<LineItem> {
        return this.http.get(this.url + id) as Observable<LineItem>;
    }
      
    create(lineItem: LineItem): Observable<LineItem> {
        return this.http.post(this.url, lineItem) as Observable<LineItem>;
    }
    
    update(lineItem: LineItem): Observable<LineItem> {
        return this.http.put(this.url, lineItem) as Observable<LineItem>;
    }
    
    delete(id: number): Observable<LineItem> {
        return this.http.delete(this.url + id) as Observable<LineItem>;
    }
}