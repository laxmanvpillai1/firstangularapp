import { Component } from '@angular/core';
import { IProduct } from '../shared/product';
import { ProductService } from './products.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number =2;
    showImages: boolean = false;
    errorMessage: string;
    //listFilter: string = "";
    private _listFilter:string;

    get listFilter():string{
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = (this.listFilter)?this.performFilter(this.listFilter):this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[];

    constructor(private _productService:ProductService){
        this.listFilter = "";
        
    }

    toggleImage(): void{
        this.showImages = !this.showImages;
    }

    performFilter(filterBy:string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }

    ngOnInit():void{
        this._productService.getProducts().subscribe(products => {this.products = products;
            this.filteredProducts = this.products;
        },
        error=> this.errorMessage = <any>error)
        
    }

}