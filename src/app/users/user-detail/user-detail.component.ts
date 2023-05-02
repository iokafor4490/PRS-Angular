import { Component } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
pageTitle: string = "User Detail";
user!: User;
id!: number;

constructor (
  private userService: UserService,
  private route: ActivatedRoute) {}
  
ngOnInit() {
  this.route.params.subscribe(parms => this.id = parms['id']);
  this.userService.getbyId(this.id).subscribe( 
      jr => { this.user = jr as User;
      }
  );
}

//delete user by Id
 delete() {
  this.userService.delete(this.id).subscribe(
      jr => { 
          this.user = jr as User;
      }
  )
}

}




