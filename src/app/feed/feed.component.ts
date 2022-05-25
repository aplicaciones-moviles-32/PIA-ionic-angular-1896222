import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthusersService } from '../services/authusers.service';
import { RealtimefbService } from '../services/realtimefb.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  constructor(private db : RealtimefbService, private auth : AuthusersService, private popover : PopoverController, private route : Router) { }

  colorheart="light";
  colorplane="light";
  colorcoment="light";
  colorsave="light";

  userLogged=this.auth.getUserLogged();
  key = 123;
  posts : any = [];
  reves : any = [];
  tester : any = [];

  filtro : string = '';
  isPopoverOpen : boolean = false;
  editando: boolean = false;

  ngOnInit() {}

  cargarFeed() {
    this.db.getPublicaciones()
    .subscribe(resp => {
      console.log(resp);
      this.tester = Object.values(resp);
      console.log(this.tester);
      for(let test of this.tester){
        if(test != null){
          //this.alumnos = this.alumnos.concat(test);
          this.posts.push(test);
        }
      }
      //console.log(this.alumnos);
      console.log(this.posts);
      console.log(Object.keys(resp).reverse());
      this.reves=this.posts.reverse();
    })
   }

   borrar(idPost : number)  {
    this.db.deletePublicacion(idPost).subscribe(res => {
      console.log(res);
      this.cargarFeed();
    })
    
  }

  editar() {
    this.editando = !this.editando;
  }

  guardar(idPost: number, nuevoCaption: any) {
    this.db.updatePublicacion(idPost, nuevoCaption).subscribe(res => {
      console.log("Se actualizo la base de datos")
    });

    this.editar();
  }
  
  //#region Interacciones

  heart(){
    if(this.colorheart=="light")
    this.colorheart="danger";
    else
    this.colorheart="light";
  }
  plane(){
    if(this.colorplane=="light")
    this.colorplane="tertiary";
    else
    this.colorplane="light";
    
  }
  coment(){
    if(this.colorcoment=="light")
    this.colorcoment="warning";
    else
    this.colorcoment="light";
   
  }
  save(){
    if(this.colorsave=="light")
    this.colorsave="primary";
    else
    this.colorsave="light";
  }

  //#endregion

}
