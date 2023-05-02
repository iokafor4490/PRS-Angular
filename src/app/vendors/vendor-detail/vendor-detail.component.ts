import { Component } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {
  pageTitle: string = "Vendor Detail";
  vendor: Vendor= 
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
};

}
  

