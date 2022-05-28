import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { resourceUsage } from 'process';
import { Post } from '../models/post';
import { AuthusersService } from '../services/authusers.service';
import { RealtimefbService } from '../services/realtimefb.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  constructor(private db : RealtimefbService, private auth : AuthusersService, private popover : PopoverController, private route : Router) { }

  colorheart="dark";
  colorplane="dark";
  colorcoment="dark";
  colorsave="dark";

  userLogged=this.auth.getUserLogged();
  key = 123;
  posts : Post[] = [];
  reves : any = [];
  tester : any = [];
  entries : any = {};

  filtro : string = '';
  isPopoverOpen : boolean = false;

  ngOnInit() {
    this.cargarFeed();
  }

  cargarFeed() {
    this.db.getPublicaciones().subscribe(resp => {
      console.log(resp);
      this.entries = resp;
      console.log(this.entries);
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
      //console.log(Object.keys(resp).reverse());
      this.reves=this.posts.reverse();
    })
   }

  redirect(id :string){
    console.log(id);
    Object.entries(this.entries).forEach(([key,value]) => {
      //console.log(key);
      //console.log(value);
      if(id == (value as Post).id){
        console.log(key);
        this.route.navigate(['/publi',key]);
      }
    })
  }
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
