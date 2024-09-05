import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(

    private navCtrl: NavController,

  ) { }

  ngOnInit() {
  }

  volver() {
    this.navCtrl.back();
  }

  perfil() {
    
    this.navCtrl.navigateForward('/perfil'); 

  }

  asistencia() {
    
    this.navCtrl.navigateForward('/attendance'); 

  }

  salir() {
    
    this.navCtrl.navigateForward('/home'); 

  }

  


}


