import { Component, OnInit,inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  NavController = inject(NavController);
  menuCtrl = inject(MenuController);

  constructor() { }

  ngOnInit() {
  }

  volver() {
    this.NavController.back();
  }

  closeMenu() {
    this.menuCtrl.close();
  }
}




