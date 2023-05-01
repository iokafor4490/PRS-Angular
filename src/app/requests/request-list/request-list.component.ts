import { Component } from '@angular/core';
import { Request } from 'src/model/request.class';
import { User } from 'src/model/user.class';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
 pageTitle: string = "Request List";
 users!: User;
 requests: any[] = [
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
},
{
    "id": 2,
    "description": "test 2",
    "justification": "test 2",
    "rejectionReason": "test 2",
    "deliveryMode": "test 2",
    "submittedDate": "2023-01-18T00:00:00",
    "dateNeeded": "2023-01-18",
    "status": "approved",
    "total": 325238.0,
    "user": {
        "id": 2,
        "userName": "nlaw",
        "firstName": "Abby",
        "lastName": "Fritsch",
        "phone": "5134170348",
        "email": "nick@nickwlaw.com",
        "isReviewer": true,
        "isAdmin": true
    }
},
{
    "id": 1003,
    "description": "test 3",
    "justification": "test 3",
    "rejectionReason": "test 3",
    "deliveryMode": "test 2",
    "submittedDate": "2023-01-18T00:00:00",
    "dateNeeded": "2023-01-18",
    "status": "Approved",
    "total": 10745.29,
    "user": {
        "id": 2,
        "userName": "nlaw",
        "firstName": "Abby",
        "lastName": "Fritsch",
        "phone": "5134170348",
        "email": "nick@nickwlaw.com",
        "isReviewer": true,
        "isAdmin": true
    }
},
{
    "id": 1004,
    "description": "test 3",
    "justification": "test 3",
    "rejectionReason": "test 3",
    "deliveryMode": "test 2",
    "submittedDate": "2023-01-18T00:00:00",
    "dateNeeded": "2023-01-18",
    "status": "Approved",
    "total": 2288.65,
    "user": {
        "id": 2,
        "userName": "nlaw",
        "firstName": "Abby",
        "lastName": "Fritsch",
        "phone": "5134170348",
        "email": "nick@nickwlaw.com",
        "isReviewer": true,
        "isAdmin": true
    }
},
{
    "id": 1012,
    "description": "hot",
    "justification": "bland",
    "rejectionReason": "invalid",
    "deliveryMode": "UPS",
    "submittedDate": "2023-03-09T00:00:00",
    "dateNeeded": "2023-03-09",
    "status": "Approved",
    "total": 0.0,
    "user": {
        "id": 1009,
        "userName": "ballou343",
        "firstName": "Granty Bob",
        "lastName": "Ballou",
        "phone": "513200300",
        "email": "chef@yahoo.com",
        "isReviewer": false,
        "isAdmin": false
    }
},
{
    "id": 1013,
    "description": "solid",
    "justification": "need new inventory",
    "rejectionReason": "invalid",
    "deliveryMode": "Courier",
    "submittedDate": "2023-03-10T00:00:00",
    "dateNeeded": "2023-03-10",
    "status": "New",
    "total": 20.0,
    "user": {
        "id": 1016,
        "userName": "grt123",
        "firstName": "Ross",
        "lastName": "Okafor",
        "phone": "5135889090",
        "email": "nigeria44@yahoo.com",
        "isReviewer": false,
        "isAdmin": false
    }
},
{
    "id": 1014,
    "description": "just need it",
    "justification": "need 100 clips",
    "rejectionReason": "invalid",
    "deliveryMode": "Courier",
    "submittedDate": "2023-03-11T00:00:00",
    "dateNeeded": "2023-03-11",
    "status": "Review",
    "total": 300.0,
    "user": {
        "id": 1016,
        "userName": "grt123",
        "firstName": "Ross",
        "lastName": "Okafor",
        "phone": "5135889090",
        "email": "nigeria44@yahoo.com",
        "isReviewer": false,
        "isAdmin": false
    }
  }

 ];

}