import { Component } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {
  pageTitle: string = "Vendor Detail";
  vendor!: Vendor;
  id!: number;
  
  constructor (
    private vendorService: VendorService,
    private route: ActivatedRoute) {}


    ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.vendorService.getbyId(this.id).subscribe(
        jr => { this.vendor= jr as Vendor}
    );
}
}
  

