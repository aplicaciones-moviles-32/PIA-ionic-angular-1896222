import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Usuario } from '../models/usuario';
import { AuthusersService } from '../services/authusers.service';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthusersService, public alertC : AlertController, public modalC : ModalController) { }

  ngOnInit() {
    if(this.auth.getUserLogged()){
      this.modalC.dismiss();
    }
  }

  user : Usuario = {email : '', pass : ''};

  Ingresar(){

    try{
      const{email,pass}=this.user;
      this.auth.login(email,pass).then(res=>{
        console.log("Sesion Iniciada:",res);
        this.modalC.dismiss();
      })
    }
    catch(err){
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertC.create({
      cssClass: 'my-custom-class',
      header: 'Fallo al inicio de sesion',
      subHeader: 'Favor de verificar sus credenciales',
      message: ':(',
      buttons: ['OK']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  Registro(){
    const{email,pass}=this.user;
    this.auth.registro("eliam3k@gmail.com","vr3k22ML").then(res=>{
      console.log("Sesion Iniciada con Google:",res);
    })
  }

  IngresarGoogle(){
    console.log('Iniciando con Google');
    const{email,pass}=this.user;
    this.auth.loginGoogle(email,pass).then(res=>{
      console.log("Sesion Iniciada con Google:",res);
      this.modalC.dismiss();
    })
  }
  


}
