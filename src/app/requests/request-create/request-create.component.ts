import { Component } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
pageTitle: string = "Create New Request";
user!: User;
request!: Request;
}

