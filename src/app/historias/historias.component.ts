import { Component, OnInit } from '@angular/core';
import { AuthusersService } from '../services/authusers.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.scss'],
})
export class HistoriasComponent implements OnInit {

  constructor(private auth : AuthusersService) { }

  ngOnInit() {}

  userLogged=this.auth.getUserLogged();

}
