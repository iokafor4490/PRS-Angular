import { Component } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
  pageTitle: string = "Edit Vendor";
  vendor: any = []

}
  