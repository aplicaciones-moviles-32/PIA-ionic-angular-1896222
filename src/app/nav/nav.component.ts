import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthusersService } from '../services/authusers.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(private auth : AuthusersService, private pop : PopoverController) { }

  ngOnInit() {}

  userLogged=this.auth.getUserLogged();
  logOut(){
    this.auth.logOut();
    this.pop.dismiss();
  }

}
