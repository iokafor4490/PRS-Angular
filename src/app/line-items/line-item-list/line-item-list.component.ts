import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent implements OnInit{
  title: string = "Line Items";
  lineItems: LineItem[] = [];
  items: LineItem[] = [];
  id!: number;

  constructor(
    private lineItemService: LineItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(p => this.id = p['id']);
    this.lineItemService.get(this.id).subscribe(jr => this.lineItems = jr as unknown as LineItem[]);
    this.lineItemService.get(this.id).subscribe(jr => this.items = jr as unknown as LineItem[]);

  }

}
