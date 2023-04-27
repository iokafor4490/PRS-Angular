import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  pageTitle: string = "Vendors List";
  vendors: any[] = [
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
  },
  {
      "id": 2,
      "code": "CODE-5678",
      "name": "Apple Inc",
      "address": "9 Innovation Place",
      "city": "Oxford",
      "state": "OH",
      "zip": "45202",
      "phone": "5135551234",
      "email": "innovation@pear.net"
  },
  {
      "id": 1003,
      "code": "ABC",
      "name": "ABC Toys",
      "address": "100 Main Ave",
      "city": "Atlanta",
      "state": "GA",
      "zip": "80510",
      "phone": "8589002323",
      "email": "abctoys@gmail.com"
  },
  {
      "id": 1004,
      "code": "Microsoft",
      "name": "Microsoft Pins",
      "address": "565 Edroy Ct",
      "city": "Solon",
      "state": "OH",
      "zip": "45209",
      "phone": "5134563283",
      "email": "micro123@microsoft.com"
  },
  {
      "id": 1007,
      "code": "Dell234",
      "name": "Dell Inc",
      "address": "456 Murcott Circle",
      "city": "Dallas",
      "state": "TX",
      "zip": "98232",
      "phone": "912345989",
      "email": "dell@yahoo.com"
  },
  {
      "id": 1008,
      "code": "CNN234",
      "name": "CNN INC",
      "address": "456 Snowberry Lane",
      "city": "Chicago",
      "state": "IL",
      "zip": "32232",
      "phone": "412348889",
      "email": "cnn@yahoo.com"
  },
  {
      "id": 1009,
      "code": "Bloom123",
      "name": "Bloomberg",
      "address": "1232 Jackson Lane",
      "city": "New York",
      "state": "NY",
      "zip": "10232",
      "phone": "7041230900",
      "email": "bloomberg@gmail.com"
  },
  {
      "id": 1010,
      "code": "ProctorGam",
      "name": "Proctor Gamble",
      "address": "1232 Henry Road",
      "city": "Cincinnati",
      "state": "OH",
      "zip": "45209",
      "phone": "5131002343",
      "email": "proctor@yahoo.com"
  },
  {
      "id": 1012,
      "code": "HarrisInc",
      "name": "Harris Financial",
      "address": "555 Juniper Lane",
      "city": "Nashville",
      "state": "TN",
      "zip": "45909",
      "phone": "6154569909",
      "email": "harris@yahoo.com"
  }
  ];

}