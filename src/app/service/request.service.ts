import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../model/request.class';

@Injectable({
    providedIn: 'root'
  })
  export class RequestService {
    url: string = 'http://localhost:8080/requests';
  
    constructor(private http: HttpClient) { }

    getAll(): Observable<Request> {
    return this.http.get(this.url) as Observable<Request>;
    }



  }