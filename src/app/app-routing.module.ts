import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  { path: '', component: HomeComponent }, // Will not be our default path once we add login
  { path: "product/create", component: ProductCreateComponent },
  { path: "home", component: HomeComponent },
  
  { path: "product/edit/:id", component: ProductEditComponent },
  { path: "product/detail/:id", component: ProductDetailComponent },
  { path: "request/list", component: RequestListComponent },
  { path: "request/create", component: RequestCreateComponent },
  { path: "request/edit/:id", component: RequestEditComponent },
  { path: "request/detail/:id", component: RequestDetailComponent },
  { path: "request/list-review", component: RequestReviewComponent },
  { path: "request/review-detail/:id", component: ReviewDetailComponent },
  { path: "user/login", component: UserLoginComponent },
  { path: "user/list", component: UserListComponent },
  { path: "user/create", component: UserCreateComponent },
  { path: "user/edit/:id", component: UserEditComponent },
  { path: "user/detail/:id", component: UserDetailComponent },
  { path: "vendor/list", component: VendorListComponent },
  { path: "vendor/create", component: VendorCreateComponent },
  { path: "vendor/edit/:id", component: VendorEditComponent },
  { path: "vendor/detail/:id", component: VendorDetailComponent },
  { path: "product/list", component: ProductListComponent },
  { path: '**', component: HomeComponent } // If you mess up in any way, it'll send you to this page (not secure!!!!)
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
