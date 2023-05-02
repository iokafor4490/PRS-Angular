import { Component } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  pageTitle: string = "Vendors List";
  vendors: Vendor[] = [];

  constructor (private vendorService: VendorService) {}

      ngOnInit() {
      this.vendorService.getAll().subscribe(
          jr => {
              this.vendors = jr as Vendor[];
          }
      )
  }
}