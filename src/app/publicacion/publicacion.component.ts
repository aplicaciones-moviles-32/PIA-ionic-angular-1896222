import { Component, OnInit } from '@angular/core';
import { object } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { error } from 'console';
import { Post } from '../models/post';
import { AuthusersService } from '../services/authusers.service';
import { RealtimefbService } from '../services/realtimefb.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta : ActivatedRoute, private db : RealtimefbService, private auth : AuthusersService, public alertC : AlertController) { }

  userLogged=this.auth.getUserLogged();
  publicacionImprimir: any = {};
  paramID : any;//Recibe parametro

  colorheart="dark";
  colorplane="dark";
  colorcoment="dark";
  colorsave="dark";

  ngOnInit() {
    //this.cargarFeed();
    this.paramID = this.ruta.snapshot.params['id'];
    console.log(this.paramID);
    console.log('AQUIIIIIIIIII');
    this.getPost(this.paramID);
  }

  //#region FUNCIONES
   getPost(key : string){
    //console.log('SI SE PUEDEEEEE');
    this.db.getPost(key).then(res => {
      console.log((res.val() as Post));
      this.publicacionImprimir = (res.val() as Post);
    })
   }

   borrar(){
    this.db.deletePublicacion(this.paramID).subscribe(resp => {
      if(resp == null){
        console.log('Borro algo...');
        window.location.href='/feed';
      }
    });
  }

  editar( nuevoCaption: any) {
    this.db.updatePublicacion(this.paramID, nuevoCaption).subscribe(res => {
      console.log("Se actualizo la base de datos");
      window.location.href='/feed';
    });
  }


  //#endregion

  //#region ALERTAS DE CONFIRMACION

   async EraseAlert() {
    const alert = await this.alertC.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      subHeader: 'Accion Irreversible',
      message: '¿Seguro que desea borrar?',
      buttons: [
        {
          text: 'Borrar',
          id: 'confirm-button',
          handler: () => {
            console.log('Borrando...');
            this.borrar();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (Cancelar) => {
            console.log('Borrado cancelado');
          }
        }]
    });
    alert.present();
  }

  async EditAlert(objeto : any) {
    const alert = await this.alertC.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      subHeader: 'Accion Irreversible',
      message: '¿Seguro que desea aplicar cambios?',
      buttons: [
        {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: () => {
            console.log('Editando...');
            this.editar(objeto);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (Cancelar) => {
            console.log('Borrado cancelado');
          }
        }]
    });
    alert.present();
  }

  //#endregion

  //#region Interacciones

  heart(){
    if(this.colorheart=="dark")
    this.colorheart="danger";
    else
    this.colorheart="dark";
  }
  plane(){
    if(this.colorplane=="dark")
    this.colorplane="tertiary";
    else
    this.colorplane="dark";
    
  }
  coment(){
    if(this.colorcoment=="dark")
    this.colorcoment="warning";
    else
    this.colorcoment="dark";
   
  }
  save(){
    if(this.colorsave=="dark")
    this.colorsave="primary";
    else
    this.colorsave="dark";
  }

  //#endregion

}
