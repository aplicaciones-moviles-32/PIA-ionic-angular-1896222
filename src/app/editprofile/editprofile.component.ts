import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthusersService } from '../services/authusers.service';
import { RealtimefbService } from '../services/realtimefb.service';
import { getAuth, updateProfile , updatePassword } from "firebase/auth";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
})
export class EditprofileComponent implements OnInit {

  constructor(private auth : AuthusersService, private db : RealtimefbService) { }

  user : User = {email: '', pass: '', confirm: '', name: ''}
  imgUploaded : any;
  urlImgFirebase : any;
  userLogged=this.auth.getUserLogged()

  ngOnInit() {
    this.user.name = this.auth.getUserName();
  }

  Update(){
    this.Cimagen();
    
    if(!this.imgUploaded && this.user.name){
      this.Cnombre();
    }else if(this.imgUploaded){
      let url;
      const auth = getAuth();

      updateProfile(auth.currentUser, { displayName: this.user.name, }).then(() => {
        console.log("Nombre actualizado"+ this.user.name);
        
        this.SubirImagen(this.user,this.imgUploaded).then(x=>{
          url=x;
          let id;
          id=this.auth.getUserId();
          updateProfile(auth.currentUser, { photoURL: url }).then(() => {
            console.log("Imagen listo");
            window.location.href="/perfil";
          }).catch((error) => { });
        });

      }).catch((error) => { });
    }
  }

  cargarImagen(event:any){
    try{
      let archivos=event.target.files
    
      this.auth.getUserLogged();
      let usuario= this.auth.getUserId();

      let reader=new FileReader();
        reader.readAsDataURL(archivos[0]);
        reader.onloadend=()=>{
          //this.SubirImagen(usuario,reader.result);
        this.imgUploaded=reader.result;
        }
    }catch(err){console.log("error subir foto",err)}
  }

  Cimagen(){
    let url;
    this.SubirImagen(this.user,this.imgUploaded).then(x=>{
      console.log("subida"+{x});
      url=x;
      let id;
      id=this.auth.getUserId();
        const auth = getAuth();
        updateProfile(auth.currentUser, { photoURL: url }).then(() => {
          console.log("Imagen listo");
          window.location.href="/perfil";
        }).catch((error) => { });
    });
  }

  SubirImagen=(usuario:any,image:any)=>{
    let url;
    return new Promise((resolve)=>{
      this.db.subirImagen(usuario+"_"+Date.now(),image).then(urlImagen=>{
        this.urlImgFirebase=urlImagen;
        console.log(this.urlImgFirebase);
        resolve(this.urlImgFirebase);
      });  
    })
    
  }

  Cnombre(){
    const auth = getAuth();
    updateProfile(auth.currentUser, { displayName: this.user.name, }).then(() => {
      console.log("Nombre actualizado"+ this.user.name);
      window.location.href="/perfil";
    }).catch((error) => { });
  }

  Ccontrasena(){
    if (this.user.pass==this.user.confirm){
      const auth = getAuth();

      const user = auth.currentUser;
      const newPassword = this.user.pass
      
      updatePassword(user, newPassword).then(() => {
        console.log("Contraseña actualizado"+ newPassword);
        window.location.href="/perfil";
      }).catch((error) => {
        // An error ocurred
        // ...
      });
    }
    
  }

}
