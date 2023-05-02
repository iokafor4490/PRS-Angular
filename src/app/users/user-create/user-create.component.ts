import { Component } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
pageTitle: string = "Create New User";
user!: User;

constructor(
  private userService: UserService) {}

  ngOnInit(): void {
      this.userService.create(this.user).subscribe(jr => {
          this.user = jr as User;
  })

}


}

