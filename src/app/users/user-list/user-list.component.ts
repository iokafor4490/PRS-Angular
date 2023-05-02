import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  pageTitle: string = "Users List";
  users: User[] = [];

 constructor(
    private userService: UserService) {}
 
    ngOnInit(): void {
        this.userService.getAll().subscribe(jr => {
            this.users = jr as User[];
    })

}

// new changes
 }
    



