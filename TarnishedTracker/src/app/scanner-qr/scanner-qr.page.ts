import { Component, OnInit, inject } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.page.html',
  styleUrls: ['./scanner-qr.page.scss'],
})
export class ScannerQrPage implements OnInit {
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
