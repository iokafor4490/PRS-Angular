import { Component } from '@angular/core';
import { User } from 'src/model/user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  pageTitle: string = "Users List";
  users: User[] = [
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
  {
      "id": 2,
      "userName": "nlaw",
      "firstName": "Abby",
      "lastName": "Fritsch",
      "phone": "5134170348",
      "email": "nick@nickwlaw.com",
      "isReviewer": true,
      "isAdmin": true
  },
  {
      "id": 1003,
      "userName": "ijeokafor",
      "firstName": "Ije",
      "lastName": "Okafor",
      "phone": "2163083333",
      "email": "ijeokafor@yahoo.com",
      "isReviewer": true,
      "isAdmin": true
  },
  {
      "id": 1007,
      "userName": "rwalters",
      "firstName": "Ricky",
      "lastName": "Walters",
      "phone": "5134003454",
      "email": "walters@yahoo.com",
      "isReviewer": true,
      "isAdmin": true
  },
  {
      "id": 1009,
      "userName": "ballou343",
      "firstName": "Granty Bob",
      "lastName": "Ballou",
      "phone": "513200300",
      "email": "chef@yahoo.com",
      "isReviewer": false,
      "isAdmin": false
  },
  {
      "id": 1010,
      "userName": "jimmy343",
      "firstName": "Jimmy",
      "lastName": "Kes",
      "phone": "5132789888",
      "email": "nails@yahoo.com",
      "isReviewer": true,
      "isAdmin": false
  },
  {
      "id": 1011,
      "userName": "nickstallings454",
      "firstName": "Nick",
      "lastName": "Stallings",
      "phone": "5130303432",
      "email": "miami@yahoo.com",
      "isReviewer": false,
      "isAdmin": true
  },
  {
      "id": 1012,
      "userName": "max123",
      "firstName": "Hilary",
      "lastName": "Clinton",
      "phone": "5139009191",
      "email": "maxadams@yahoo.com",
      "isReviewer": true,
      "isAdmin": true
  },
  {
      "id": 1015,
      "userName": "eke123",
      "firstName": "Ekene",
      "lastName": "Remur",
      "phone": "5135459090",
      "email": "nigeria23@yahoo.com",
      "isReviewer": true,
      "isAdmin": true
  },
  {
      "id": 1016,
      "userName": "grt123",
      "firstName": "Ross",
      "lastName": "Okafor",
      "phone": "5135889090",
      "email": "nigeria44@yahoo.com",
      "isReviewer": false,
      "isAdmin": false
  },
  {
      "id": 1018,
      "userName": "paigeb",
      "firstName": "Paige",
      "lastName": "Bresnan",
      "phone": "5135458080",
      "email": "nurse23@yahoo.com",
      "isReviewer": true,
      "isAdmin": false
  }
]

}