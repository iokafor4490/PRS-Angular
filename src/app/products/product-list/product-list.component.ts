import { Component } from "@angular/core";
import { Product } from "src/app/model/product";


@Component({ 
    selector: 'app-product-list', 
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
 
export class ProductListComponent {
    pageTitle: string = "Products List";
    products: Product[] = [
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
        },
        {
            "id": 2,
            "partNumber": "IPD-5678",
            "name": "IPad Pro Deluxe",
            "price": 1999.99,
            "unit": "unit",
            "photoPath": "www.pear.net/ipad-pro-deluxe",
            "vendor": {
                "id": 2,
                "code": "CODE-5678",
                "name": "Apple Inc",
                "address": "9 Innovation Place",
                "city": "Oxford",
                "state": "OH",
                "zip": "45202",
                "phone": "5135551234",
                "email": "innovation@pear.net"
            }
        },
        {
            "id": 3,
            "partNumber": "CCC-34443",
            "name": "Pepsi Classic 12 pack",
            "price": 10.99,
            "unit": "each",
            "photoPath": "",
            "vendor": {
                "id": 1003,
                "code": "ABC",
                "name": "ABC Toys",
                "address": "100 Main Ave",
                "city": "Atlanta",
                "state": "GA",
                "zip": "80510",
                "phone": "8589002323",
                "email": "abctoys@gmail.com"
            }
        },
        {
            "id": 1004,
            "partNumber": "3432-2223",
            "name": "Rice Beans",
            "price": 120.99,
            "unit": "unit",
            "photoPath": "www.stew.com",
            "vendor": {
                "id": 1003,
                "code": "ABC",
                "name": "ABC Toys",
                "address": "100 Main Ave",
                "city": "Atlanta",
                "state": "GA",
                "zip": "80510",
                "phone": "8589002323",
                "email": "abctoys@gmail.com"
            }
        },
        {
            "id": 1005,
            "partNumber": "2454-2412",
            "name": "laptop",
            "price": 130.99,
            "unit": "each",
            "photoPath": "null",
            "vendor": {
                "id": 1007,
                "code": "Dell234",
                "name": "Dell Inc",
                "address": "456 Murcott Circle",
                "city": "Dallas",
                "state": "TX",
                "zip": "98232",
                "phone": "912345989",
                "email": "dell@yahoo.com"
            }
        },
        {
            "id": 1006,
            "partNumber": "string",
            "name": "Fufu",
            "price": 30.33,
            "unit": "unit",
            "photoPath": "Fufu.com",
            "vendor": {
                "id": 1009,
                "code": "Bloom123",
                "name": "Bloomberg",
                "address": "1232 Jackson Lane",
                "city": "New York",
                "state": "NY",
                "zip": "10232",
                "phone": "7041230900",
                "email": "bloomberg@gmail.com"
            }
        },
        {
            "id": 1017,
            "partNumber": "FFFgd-dr",
            "name": "Bufu",
            "price": 34.33,
            "unit": "unit",
            "photoPath": "Fufu.comm",
            "vendor": {
                "id": 1009,
                "code": "Bloom123",
                "name": "Bloomberg",
                "address": "1232 Jackson Lane",
                "city": "New York",
                "state": "NY",
                "zip": "10232",
                "phone": "7041230900",
                "email": "bloomberg@gmail.com"
            }
        },
        {
            "id": 1018,
            "partNumber": "KKKgd-dr",
            "name": "Kola Nut",
            "price": 14.33,
            "unit": "unit",
            "photoPath": "Kola.comm",
            "vendor": {
                "id": 1010,
                "code": "ProctorGam",
                "name": "Proctor Gamble",
                "address": "1232 Henry Road",
                "city": "Cincinnati",
                "state": "OH",
                "zip": "45209",
                "phone": "5131002343",
                "email": "proctor@yahoo.com"
            }
        },
        {
            "id": 1019,
            "partNumber": "mango123-r",
            "name": "Mango",
            "price": 2.33,
            "unit": "each",
            "photoPath": "mango.comm",
            "vendor": {
                "id": 1004,
                "code": "Microsoft",
                "name": "Microsoft Pins",
                "address": "565 Edroy Ct",
                "city": "Solon",
                "state": "OH",
                "zip": "45209",
                "phone": "5134563283",
                "email": "micro123@microsoft.com"
            }
        },
        {
            "id": 1029,
            "partNumber": "6790-123",
            "name": "CVS",
            "price": 23.55,
            "unit": "each",
            "photoPath": "idk",
            "vendor": {
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
        },
        {
            "id": 1032,
            "partNumber": "Ccc-52234",
            "name": "Tools",
            "price": 64.93,
            "unit": "each",
            "photoPath": "",
            "vendor": {
                "id": 1009,
                "code": "Bloom123",
                "name": "Bloomberg",
                "address": "1232 Jackson Lane",
                "city": "New York",
                "state": "NY",
                "zip": "10232",
                "phone": "7041230900",
                "email": "bloomberg@gmail.com"
            }
        }
    ]
}