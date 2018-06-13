import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor( private _router: Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id  = +route.url[1].path;
    if (!isNaN(id))
      return true;
    else{
      
      this._router.navigate(['/products']);
      return false;
    }
      
  }

}
