import { Component } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
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

constructor(private requestService: RequestService) { }

create() {
  this.requestService.create(this.request).subscribe(jr =>
      this.request = jr as Request);
  } 

}