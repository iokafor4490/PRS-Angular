import { Component } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {
pageTitle: string = "Request Review";
users!: User;
requests: Request[] = [


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
        "password": "password",
        "firstName": "firstName",
        "lastName": "lastName",
        "phone": "5135551234",
        "email": "admin@email.com",
        "isReviewer": true,
        "isAdmin": true
    }
}

];

}



