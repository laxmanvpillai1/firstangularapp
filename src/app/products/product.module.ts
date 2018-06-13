import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpaces } from '../shared/convert.-to-spaces.pipe';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './products.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products', component:ProductListComponent},
      {path:'products/:id', canActivate:[ProductGuardService], component:ProductDetailComponent},
      
      
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpaces,
  ],

  providers:[ProductGuardService, ProductService]
})
export class ProductModule { }
