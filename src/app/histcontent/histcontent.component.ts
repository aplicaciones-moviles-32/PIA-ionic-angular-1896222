import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-histcontent',
  templateUrl: './histcontent.component.html',
  styleUrls: ['./histcontent.component.scss'],
})
export class HistcontentComponent implements OnInit {

  constructor(private modal : ModalController) { }

  ngOnInit() {  }

  

  ngOnDestroy(){
    this.modal.dismiss();
  }
}
