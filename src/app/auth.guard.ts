import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";



@Injectable({
    providedIn: 'root'
})

export class AuthGuard  implements CanActivate{
    constructor(private route:Router){

    }
    canActivate(): boolean {
       this.token = localStorage.getItem('token');
        if(this.token){
            return true;
        } else {
           this.route.navigate(['login']);
           return false;
        }
    }
    token:any;
   
}