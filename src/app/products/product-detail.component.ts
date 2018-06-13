import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { ProductService } from './products.service';
import { IProduct } from '../shared/product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: IProduct[];
  product: IProduct;
  pageTitle: string = 'Product Detail'

  constructor(private _route:ActivatedRoute, private _productService: ProductService, private _router:Router) { 

  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProducts().subscribe(products=>{
      this.products = products;
      this.product = (this.products).find(product => product.productId === id);
      this.pageTitle += ': ' + this.product.productId + ': ' + this.product.productName;
    })
  }

  onBack(): void{
    this._router.navigate(['/products']);
  }

}
