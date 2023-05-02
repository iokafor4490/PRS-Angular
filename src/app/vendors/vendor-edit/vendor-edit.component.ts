import { Component } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
  pageTitle: string = "Edit Vendor";
  vendor: any = 
  {
    "id": 1,
    "code": "CODE-1234",
    "name": "Wally World",
    "address": "123 Capitalism Lane",
    "city": "Cincinnati",
    "state": "OH",
    "zip": "45202",
    "phone": "5135551234",
    "email": "customercare@wallyworld.net"
}
  }