import { Component } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { Request } from 'src/app/model/request.class';
import { UserService } from 'src/app/service/user.service';
import { LineItem } from 'src/app/model/line-item.class';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent {
pageTitle: string = "Edit Request";
request!: Request;
user!: User;
lineItems: LineItem[] = [];
id: number = 0;

constructor(
  private requestService: RequestService,
  private route: ActivatedRoute) {}

ngOnInit() {
  this.route.params.subscribe(p => this.id = p['id']);
  this.requestService.getById(this.id).subscribe(jr => this.request = jr as Request);
}
}