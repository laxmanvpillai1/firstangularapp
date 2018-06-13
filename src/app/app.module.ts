import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { StarComponent } from './shared/star.component'
import { ConvertToSpaces } from './shared/convert.-to-spaces.pipe';
import { ProductService } from './products/products.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'}
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
