import { Component, OnInit } from '@angular/core';
import { AuthusersService } from '../services/authusers.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor(private auth : AuthusersService) { }

  latitud:string;
  longitud:string;
  userLogged=this.auth.getUserLogged();
  usuario : any = {}
  editando = false;

  ngOnInit() {
    this.ObtenerCoordenadas();
  }

  async ObtenerCoordenadas(){
    const ObtenerCoordenada=await Geolocation.getCurrentPosition();
    this.latitud= '  ' + String.fromCharCode(0x03BB) + ' ' + ObtenerCoordenada.coords.latitude;
    this.longitud='  ' + String.fromCharCode(0x03C6) + ObtenerCoordenada.coords.longitude;
  }
  
  toggleEditar(): void {
    this.editando = !this.editando;
  }
}
