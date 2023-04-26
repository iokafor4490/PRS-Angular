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
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Will not be our default path once we add login
  { path: "product/create", component: ProductCreateComponent },
  { path: "home", component: HomeComponent },
  { path: '**', component: HomeComponent }, // If you mess up in any way, it'll send you to this page (not secure!!!!)
  { path: "products/edit/:id", component: ProductEditComponent },
  { path: "products/detail/:id", component: ProductDetailComponent },
  { path: "requests/list", component: RequestListComponent },
  { path: "requests/create", component: RequestCreateComponent },
  { path: "requests/edit/:id", component: RequestEditComponent },
  { path: "requests/detail/:id", component: RequestDetailComponent },
  { path: "requests/list-review", component: RequestReviewComponent },
  { path: "requests/review-detail/:id", component: ReviewDetailComponent },
  { path: "users/login", component: UserLoginComponent },
  { path: "users/list", component: UserListComponent },
  { path: "users/create", component: UserCreateComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "vendors/list", component: VendorListComponent },
  { path: "vendors/create", component: VendorCreateComponent },
  { path: "vendors/edit/:id", component: VendorEditComponent },
  { path: "vendors/detail/:id", component: VendorDetailComponent },
  { path: "products/list", component: ProductListComponent },
  { path: "menu", component: MenuComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
