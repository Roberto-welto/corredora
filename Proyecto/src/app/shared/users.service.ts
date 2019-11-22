import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class UsersSistemaService{
    constructor(private router: Router, private route: ActivatedRoute){}
    users: string[] = ['rgonbarria@gmail.com', 'jibanez123456@gmail.com'];
    token: string;
    signinUser(email: string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        )
                    }
                )
                .catch(
                    error => console.log(error)
                );
            }
    getIdToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => this.token = token
        );
        return this.token;
    }
    isAuthenticated(){
        return this.token != null;
    }
    keepUserLogged()
    {
        firebase.auth.Auth.Persistence.LOCAL;
           
    }
    logOut(){
        firebase.auth().signOut().then(() => {
            this.router.navigate(['./../']);
        });
        this.token = null;
    }        
}