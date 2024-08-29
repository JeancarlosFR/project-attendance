import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: string = '';
  pass: string = '';

  NavController = inject(NavController);
  toastController = inject(ToastController);

  constructor() {}

  ionViewDidEnter(): void {
    this.usuario = '';
    this.pass = '';
  }

  async ingresar() {
    if (this.usuario === 'admin' && this.pass === '1234') {
      this.NavController.navigateForward('/perfil');
    } else {
        const toast = await this.toastController.create({
        message: 'Usuario o contraseña incorrecta',
        duration: 2000, 
        position: 'bottom', 
        color: 'medium', 
        cssClass: 'custom-toast'
      });
      toast.present();
    
    }
  }
}
