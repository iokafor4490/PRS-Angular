import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
pageTitle: string = "User Detail";
user!: User;
id: number = 0;

constructor (
  private userService: UserService,
  private router: Router,
  private route: ActivatedRoute
  ) {}
  
ngOnInit() {
  this.route.params.subscribe(parms => this.id = parms['id']);
  this.userService.getbyId(this.id).subscribe( jr =>  this.user = jr as User);
      }
  


   delete() {
    this.userService.delete(this.id).subscribe(jr =>
      this.router.navigateByUrl("user/list"));
   }

    }






