import { Component } from '@angular/core';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent {
lineItem: any = {
  "id": 0,
  "requestId": 0,
  "productId": 0,
  "quantity": 0,
  "product": {
    "id": 1,
    "partNumber": "CCC-1234",
    "name": "Coca-Cola Classic 40 pack",
    "price": 8.99,
    "unit": "each",
    "photoPath": "",
    "vendor": {
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
}


}
