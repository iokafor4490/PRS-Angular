import { Component } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
pageTitle: string = "User Login";
user!: User;

    constructor(private userService: UserService,
        private router: Router,
        private route: ActivatedRoute) {}

}