import { Injectable } from '@angular/core';
//import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){
    //return this.db.list<any>('/users/').valueChanges();
  }
}
