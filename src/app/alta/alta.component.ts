import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Newuser } from '../models/newuser';
import { AuthusersService } from '../services/authusers.service';
import { RealtimefbService} from '../services/realtimefb.service'
import { getAuth, updateProfile } from "firebase/auth";

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss'],
})
export class AltaComponent implements OnInit {

  constructor(private auth :AuthusersService, private db : RealtimefbService, public alertC : AlertController) { }

  newUser : Newuser = {email: '', pass: '', confirm: '', name: ''};
  imgUp : any;
  urlImgFirebase:any;

  ngOnInit() {}

  uploadedImg(event:any){
    try{
      let archivos=event.target.files
    
      this.auth.getUserLogged();
      let usuario= this.auth.getUserId();

      let reader=new FileReader();
        reader.readAsDataURL(archivos[0]);
        reader.onloadend=()=>{
          //this.SubirImagen(usuario,reader.result);
        this.imgUp=reader.result;
        }
    }catch(err){console.log("error subir foto",err)}
  }

  async presentAlert() {
    const alert = await this.alertC.create({
      cssClass: 'my-custom-class',
      header: 'Creando usuario',
      subHeader: 'Puede tardar un momento',
      message: ':)',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  uploadImg=(user:any,img:any)=>{
    let url;
    return new Promise((resolve)=>{
      this.db.subirImagen(user+"_"+Date.now(),img).then(urlImagen=>{
        this.urlImgFirebase=urlImagen;
        console.log(this.urlImgFirebase);
        resolve(this.urlImgFirebase);
      });  
    })
  }

  Registro(){
    let url;
    
    console.log(this.newUser.pass+this.newUser.confirm,this.newUser.name,this.newUser.email);
    
    if(this.newUser.pass==this.newUser.confirm &&(this.newUser.name!='')&&(this.newUser.pass!='')&&(this.newUser.email!='')){
     this.presentAlert(); 
      this.uploadImg(this.newUser,this.imgUp).then(x=>{
        
        console.log("subida"+{x});
        url=x;
        let id;
        const{email,pass,name}=this.newUser;
        this.auth.registro(email,pass).then(res=>{
          console.log("Registro exitoso:",res);
          id=this.auth.getUserId();
          const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName:name, photoURL: url
          }).then(() => {
            console.log("Todo listo");
            window.location.href="/feed";
          }).catch((error) => {});
        });
      });
    }

  }

}
