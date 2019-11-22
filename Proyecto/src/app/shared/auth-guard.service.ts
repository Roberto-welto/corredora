import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, UrlSegment, Router } from '@angular/router'
import { UsersSistemaService } from './users.service';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private userService: UsersSistemaService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.userService.isAuthenticated();
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): boolean | Observable<boolean> | Promise<boolean> {
        return new Promise((res, rej) => {
            firebase.auth().onAuthStateChanged((user: firebase.User) => {
                if(user){
                    console.log('user is logged in');
                    res(true)
                } else {
                    console.log('user is not logged in');
                    res(false);
                }
            })
        })
    }
}