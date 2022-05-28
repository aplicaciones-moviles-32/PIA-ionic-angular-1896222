import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { AuthusersService } from '../services/authusers.service';
import { RealtimefbService } from '../services/realtimefb.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {

  constructor(private auth : AuthusersService, private db : RealtimefbService, private route : Router) { }

  userLogged=this.auth.getUserLogged();
  userUID = this.auth.getUserId();
  publicaciones : any = [];
  posts: Post[] = [];
  Tposts : Post[] = [];
  activo = 'posts';

  ngOnInit() {
    this.loadUposts();
  }

  loadUposts() {
    this.db.getPublicaciones().subscribe(resp => {
      Object.entries(resp).forEach(([key,value]) => {
        //console.log(key);
        //console.log(value);
        this.publicaciones = resp;
        this.Tposts.push(value as Post);//Extrae un arreglo de posts
      })
      //console.log(this.Tposts);
      for(let post of this.Tposts){
        if(this.userUID == post.UID){//Extrae el arreglo de post del usuario logeado
          this.posts.push(post);
        }
      }
      //console.log(this.posts);
    })
   }

   toggleActivo(activo: any):void {//Interaccion de vista con grid de perfil
     console.log(activo.detail.value);
    this.activo = activo.detail.value;
  }

  redirect(id : string){
    //console.log(this.publicaciones);
    //console.log(id);
    Object.entries(this.publicaciones).forEach(([key,value]) => {
      //console.log(key);
      //console.log(value);
      if(id == (value as Post).id){
        console.log(key);
        this.route.navigate(['/publi',key]);
      }
    })
  }

}
