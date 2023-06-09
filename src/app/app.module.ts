import { Host, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestReviewComponent } from './requests/request-review/request-review.component';
import { ReviewDetailComponent } from './requests/review-detail/review-detail.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LineItemCreateComponent } from './line-items/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './line-items/line-item-edit/line-item-edit.component';
import { LineItemDetailComponent } from './line-items/line-item-detail/line-item-detail.component';
import { LineItemListComponent } from './line-items/line-item-list/line-item-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserListComponent,
    UserLoginComponent,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestListComponent,
    RequestReviewComponent,
    ReviewDetailComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    LineItemCreateComponent,
    LineItemEditComponent,
    LineItemDetailComponent,
    LineItemListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
