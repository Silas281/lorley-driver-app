import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app'
// import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User | null>
  constructor() {
    //this.user$ = afAuth.authState;
  }

  login(){
    //this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
