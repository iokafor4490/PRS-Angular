import { Component } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
pageTitle: string = "Edit User";
users!: User 
id: number = 0;

constructor( 
  private userService: UserService,
  private route: ActivatedRoute) {}

ngOnInit() {
 this.route.params.subscribe(params => this.id = params['id']);
 this.userService.getbyId(this.id).subscribe(jr => this.users = jr as User);

}
update() {
  this.userService.update(this.users).subscribe(jr => {this.users = jr as User});
}


}

