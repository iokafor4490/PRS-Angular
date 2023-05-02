import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  pageTitle: string = "Create New Product";
  products!: Product;

  constructor (private productService: ProductService) {}

  ngOnInit() {
      this.productService.create(this.products).subscribe(
          jr => {
              this.products = jr as Product;
          }
      )
  }
}