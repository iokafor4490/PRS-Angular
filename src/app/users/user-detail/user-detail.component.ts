import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
pageTitle: string = "User Detail";
users: any[] = [
{
  "id": 1,
  "userName": "username",
  "firstName": "firstName",
  "lastName": "lastName",
  "phone": "5135551234",
  "email": "admin@email.com",
  "isReviewer": true,
  "isAdmin": true
},

]

}