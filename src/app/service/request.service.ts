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

    getAllRequests(): Observable<Request> {
        return this.http.get(this.url) as Observable<Request>;
    }

    getRequest(id: number): Observable<Request> {
        return this.http.get(this.url + "/" + id) as Observable<Request>;
    }
      
    createRequest(request: Request): Observable<Request> {
        return this.http.post(this.url, request) as Observable<Request>;
    }
    
    updateRequest(request: Request): Observable<Request> {
        return this.http.put(this.url, request) as Observable<Request>;
    }
      
    deleteRequest(id: number): Observable<Request> {
        return this.http.delete(this.url + id) as Observable<Request>;
    }

    submitRequestForReview(request: Request): Observable<Request> {
        console.log("sr req ", request);
        return this.http.put(this.url + "submit-review", request) as Observable<Request>;

    }

    approveRequest(request: Request): Observable<Request> {
        return this.http.put(this.url + "approve", request) as Observable<Request>;
    }

    rejectRequest(request: Request): Observable<Request> {
        return this.http.put(this.url + "reject/", request) as Observable<Request>;
    }

    //getRequestByUserId(request: Request): Observable<Request> {
       
    //} 

  }