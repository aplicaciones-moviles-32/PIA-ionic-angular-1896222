import { Component, OnInit } from '@angular/core';
import { AuthusersService } from '../services/authusers.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private auth : AuthusersService) { }

  ngOnInit() {}

  userLogged=this.auth.getUserLogged();

}
