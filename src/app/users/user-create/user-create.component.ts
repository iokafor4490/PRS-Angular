import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
pageTitle: string = "Create New User";
user: User = new User();

constructor(
  private userService: UserService,
  private router: Router) {}


create(): void {
  this.userService.create(this.user).subscribe(jr => this.router.navigateByUrl("/user/list"));
}

}

//-- Finished