import { Component } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  pageTitle: string = "Edit Products";
  products: any =
  {
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