import { Component } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {
  pageTitle: string = "Create New Vendor";
  vendor: Vendor = new Vendor();

  constructor(
    private vendorService: VendorService,  
    private router: Router) {}

    
  
    create(): void {
    this.vendorService.create(this.vendor).subscribe(jr => this.router.navigateByUrl("/vendor/list"));
    }
  
  }
  
  
  
