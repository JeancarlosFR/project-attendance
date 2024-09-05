import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

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
