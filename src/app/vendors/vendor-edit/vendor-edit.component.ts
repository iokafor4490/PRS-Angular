import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  pageTitle: string = "Edit Vendor";
  vendor: Vendor = new Vendor();
  id: number = 0;


  constructor( 
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute) {}
  
  ngOnInit() {
   this.route.params.subscribe(params => this.id = params['id']);
   this.vendorService.getbyId(this.id).subscribe(jr => this.vendor = jr as Vendor);
  
  }
  update() {
    this.vendorService.update(this.vendor).subscribe(jr => this.router.navigateByUrl("/vendor/list"));
  }
  
  delete() {
    this.vendorService.delete(this.id).subscribe(jr =>
      this.router.navigateByUrl("vendor/list"));
   }

}
  