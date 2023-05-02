import { Component } from '@angular/core';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
pageTitle: string = "User Detail";
user: User= 
{
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




