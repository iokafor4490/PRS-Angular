import { Component } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent {
products: Product[] = [
  {
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

]

lineItem!: LineItem

}
