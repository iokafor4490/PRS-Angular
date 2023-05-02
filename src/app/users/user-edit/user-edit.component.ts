import { Component } from '@angular/core';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
pageTitle: string = "Edit User";
users : User =

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

