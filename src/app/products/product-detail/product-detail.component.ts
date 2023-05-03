import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle: string = "Product Detail";
  product!: Product;
  id: number = 0;
  

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.productService.getbyId(this.id).subscribe( jr =>  this.product = jr as Product);
        }
    
  
  
     delete() {
      this.productService.delete(this.id).subscribe(jr =>
        this.router.navigateByUrl("product/list"));
     }
  
      }