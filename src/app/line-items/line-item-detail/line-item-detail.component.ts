import { Component } from '@angular/core';

@Component({
  selector: 'app-line-item-detail',
  templateUrl: './line-item-detail.component.html',
  styleUrls: ['./line-item-detail.component.css']
})
export class LineItemDetailComponent {
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
      "photoPath": "../../../assets/drink.png",
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





