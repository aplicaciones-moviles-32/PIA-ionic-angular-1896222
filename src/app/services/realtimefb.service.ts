import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

firebase.initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})

export class RealtimefbService {

  constructor(private http : HttpClient) { }

  sRef=firebase.app().storage().ref();

  //#region GET
  
  getPublicaciones(): any {
    return this.http.get(environment.firebase.databaseURL+'/Publicaciones.json')
  }

  getDatosUsuario(): any {
    return this.http.get(environment.firebase.databaseURL+'/usuario.json')
  }

  getPublicacionesUsuario(): any {
    return this.http.get(environment.firebase.databaseURL+'/usuario/publicaciones.json')
  }

  getPublicacionDetalle(id: string): any {
    console.log(environment.firebase.databaseURL+'/Publicaciones/'+ id +'.json');
    console.log(this.http.get(environment.firebase.databaseURL+'/Publicaciones/'+ id +'.json'));
    return this.http.get(environment.firebase.databaseURL+'/Publicaciones/'+ id +'.json')
  }

  //#endregion

  //#region POST

  postPublicacion(post: any) {
    return this.http.post(environment.firebase.databaseURL+'/Publicaciones.json', post)
  }

  //#endregion

  //#region PUT

  updatePublicacion(id: number, nuevosDatos: any) {
    return this.http.put(environment.firebase.databaseURL+'/Publicaciones/'+ id.toString() +'.json', nuevosDatos)
  }

  //#endregion

  //#region DELETE

  deletePublicacion(id: number){
    console.log(environment.firebase.databaseURL+"/Publicaciones/"+ id.toString() + ".json");
    return this.http.delete(environment.firebase.databaseURL+'/Publicaciones/'+ id.toString() + '.json')
  }

  //#endregion

  async subirImagen(nombre:string,imgBase64:any){
    try{
      let respuesta=await this.sRef.child("users/"+nombre).putString(imgBase64,'data_url');

      return respuesta.ref.getDownloadURL();
    }catch(err){
      console.log("error subir imagen"+ err);
      return null;
    }

  }

}
