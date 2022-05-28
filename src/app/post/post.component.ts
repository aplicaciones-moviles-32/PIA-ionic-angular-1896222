import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Post } from '../models/post';
import { AuthusersService } from '../services/authusers.service';
import { RealtimefbService } from '../services/realtimefb.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  constructor(private db : RealtimefbService, private auth : AuthusersService, private router : Router, public alertC : AlertController, private dp : DatePipe) { }

  picture:string;
  imagenSubida:any;
  userLogged=this.auth.getUserLogged();
  post : Post = { UID: '',  user: '',id: '', uImg: '', pImg: '', caption: '', com: ''};
  usuario:any;
  urlImgFirebase:any;

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertC.create({
      cssClass: 'my-custom-class',
      header: 'Publicando',
      subHeader: 'Un momento por favor ...',
      message: 'Creando Post',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async TomarFoto(){
    try{
      const image=await Camera.getPhoto({
        quality:100,
        allowEditing:false,
        resultType:CameraResultType.DataUrl,
      });
      this.picture=image.dataUrl;
      let reader=new FileReader();
      let user= this.auth.getUserId();
      //this.SubirImagen(usuario,image.dataUrl);  
      this.usuario=user;
      this.imagenSubida=image.dataUrl;
    }catch(err){console.log("error tomar foto",err)}
  }

  SubirImagen=(usuario:any,image:any)=>{
    let url;
    return new Promise((resolve)=>{
      this.db.subirImagen(usuario+"_"+Date.now(),image).then(urlImagen=>{
      
        this.urlImgFirebase=urlImagen;
        this.post.pImg=this.urlImgFirebase;
        console.log(this.urlImgFirebase);
        resolve(this.urlImgFirebase);
      });  
    })
    
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
          this.imagenSubida=reader.result;
          this.usuario=usuario;
        }
    }catch(err){console.log("error subir foto",err)}
  }

  subir(){
    this.presentAlert();
    console.log("Subiendo foto");
    this.post.UID=this.auth.getUserId();
    this.post.user=this.auth.getUserName();
    this.post.uImg=this.auth.getUserPic();
    this.post.id = this.dp.transform((new Date), 'ddMMyyyyhmmss');
    this.SubirImagen(this.usuario,this.imagenSubida).then(x=>{
      console.log("subida"+{x});
      this.db.postPublicacion(this.post).subscribe(res=>{
        window.location.href="/feed";
      });
    });
    
    
  }

}
