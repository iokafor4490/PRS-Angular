import { Component } from '@angular/core';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
pageTitle: string = "Request Detail";
request: any =

{
  "id": 1,
  "description": "test request",
  "justification": "test",
  "rejectionReason": "test",
  "deliveryMode": "test",
  "submittedDate": "2023-03-08T00:00:00",
  "dateNeeded": "2023-01-18",
  "status": "Approved",
  "total": 3629.7,
  "user": {
      "id": 1,
      "userName": "username",
      "firstName": "firstName",
      "lastName": "lastName",
      "phone": "5135551234",
      "email": "admin@email.com",
      "isReviewer": true,
      "isAdmin": true
  }
}

}

