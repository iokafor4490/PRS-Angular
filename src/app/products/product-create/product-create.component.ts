import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  pageTitle: string = "Create New Product";
  products!: Product;
  

  constructor (private productService: ProductService,
  private router: Router) {}


  ngOnInit() {}

  create() {
    this.productService.create(this.products).subscribe(jr => this.router.navigateByUrl("/product/list"));
} 
    
}