import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthusersService {

  constructor(private auth : AngularFireAuth) { }
  
  async registro(email:string,pass:string){
    try{
      return await this.auth.createUserWithEmailAndPassword(email.trim(),pass.trim());
    }catch(err){
      console.log("error alta",err)
      return null;
    }
  }

  async login(email:string,pass:string){
    try{
      return await this.auth.signInWithEmailAndPassword(email,pass);
    }catch(err){
      console.log("error login",err)
      return null;
    }
  }

  async loginGoogle(email:string,contrasena:string){
    try{
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(err){
      console.log("error login google",err)
      return null;
    }
  }

  getUserLogged(){
    return this.auth.authState;
  }

  getUserId(){
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      const uid = user.uid;
      return uid;
    }
    else{
      return null;
    }
  }

  getUserName(){
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      const uid = user.displayName;
      return uid;
    }
    else{
      return null;
    }
  }

  getUserPic(){
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      const uid = user.photoURL;
      return uid;
    }
    else{
      return null;
    }
  }
  logOut(){
    this.auth.signOut();
  }
}
