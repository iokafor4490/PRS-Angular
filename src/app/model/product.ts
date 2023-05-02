import { Vendor } from "./vendor.class";

export class Product {
    id?: number;
    partNumber?: string;
    name?: string;
    price?: number;
    unit?: string;
    photoPath?: string;
    vendorID?: number;
    vendor?: Vendor;
      
    constructor()
    constructor(id?: number, partNumber?: string , name?: string ,
        price?: number, unit?: string , photoPath?: string,
        vendorID?: number, vendor?: Vendor) {
            this.id = id;
            this.partNumber = partNumber;
            this.name = name;
            this.price = price;
            this.unit = unit;
            this.photoPath = photoPath;
            this.vendorID = vendorID;
            this.vendor = vendor;
        }
}