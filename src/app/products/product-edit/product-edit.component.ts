import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  pageTitle: string = "Edit Products";
  product: Product = new Product();
  id: number = 0;
  
  constructor(
    private productService: ProductService,
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute)  {}

    ngOnInit() {
      this.route.params.subscribe(params => this.id = params['id']);
      this.productService.getbyId(this.id).subscribe(jr => this.product = jr as Product);
     
     }
     update() {
      this.productService.update(this.product).subscribe(jr => this.router.navigateByUrl("/product/list"));
    }

    delete() {
      this.productService.delete(this.id).subscribe(jr =>
        this.router.navigateByUrl("product/list"));
     }
     }
