import { Component } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
pageTitle: string = "Request Detail";
user!: User;
request: Request =

{
  "id": 1,
  "description": "test request",
  "justification": "test",
  "rejectionReason": "test",
  "deliveryMode": "test",
  "submittedDate": new Date(),
  "dateNeeded": new Date(),
  "status": "Approved",
  "total": 3629.7,
  "user": {
      "id": 1,
      "userName": "username",
      "password": "password",
      "firstName": "firstName",
      "lastName": "lastName",
      "phone": "5135551234",
      "email": "admin@email.com",
      "isReviewer": true,
      "isAdmin": true
  }
}

}

