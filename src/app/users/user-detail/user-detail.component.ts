import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
pageTitle: string = "User Detail";
user: any= 
{
  "id": 1,
  "userName": "ioka4123",
  "firstName": "Ike",
  "lastName": "Okafor",
  "phone": "5135551234",
  "email": "admin@email.com",
  "isReviewer": true,
  "isAdmin": true
}

}




