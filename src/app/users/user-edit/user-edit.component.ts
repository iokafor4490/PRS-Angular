import { Component } from '@angular/core';
import { User } from 'src/model/user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
pageTitle: string = "Edit User";


}