import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../model/request.class';

@Injectable({
    providedIn: 'root'
  })
  export class RequestService {
    url: string = "http://localhost:8080/requests";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Request> {
        return this.http.get(this.url) as Observable<Request>;
    }

    getById(id: number): Observable<Request> {
        return this.http.get(this.url + "/" + id) as Observable<Request>;
    }
      
    create(request: Request): Observable<Request> {
        return this.http.post(this.url, request) as Observable<Request>;
    }
    
    update(request: Request): Observable<Request> {
        return this.http.put(this.url, request) as Observable<Request>;
    }
      
    delete(id: number): Observable<Request> {
        return this.http.delete(this.url + id) as Observable<Request>;
    }

    submitRequestForReview(request: Request): Observable<Request> {
        console.log("sr req ", request);
        return this.http.put(this.url + "submit-review", request) as Observable<Request>;

    }

    approve(request: Request): Observable<Request> {
        return this.http.put(this.url + "approve", request) as Observable<Request>;
    }

    reject(request: Request): Observable<Request> {
        return this.http.put(this.url + "reject/", request) as Observable<Request>;
    }

    reopen(request: Request): Observable<Request> {
        return this.http.put(this.url + "/reopen", request) as Observable<Request>;
    }

   
    getAllForReview(userId: number): Observable<Request[]> {
        return this.http.get(this.url + "/list-review" + userId) as Observable<Request[]>;
    }

   

  }