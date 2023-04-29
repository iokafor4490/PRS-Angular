import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  pageTitle: string = "Ikenna Menkiti Okafor | Copyright 2023";
  footer: any[] = [];

}