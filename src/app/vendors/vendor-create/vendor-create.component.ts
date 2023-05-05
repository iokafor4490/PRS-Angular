import { Component } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {
  pageTitle: string = "Create New Vendor";
  vendor!: Vendor;

  constructor(
    private vendorService: VendorService) {}

    ngOnit() {}
  
    create() {
        this.vendorService.create(this.vendor).subscribe(jr => {
            this.vendor = jr as Vendor;
    })
  
  }
  
  
  }

