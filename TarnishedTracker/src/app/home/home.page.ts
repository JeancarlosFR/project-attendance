import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { lastValueFrom, timer } from 'rxjs';
import { LoadingController } from '@ionic/angular';

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
  loadSrv = inject(LoadingController);

  constructor() {}

  ionViewWillEnter(): void {
    this.usuario = '';
    this.pass = '';
  }

  async ingresar() {
    const load = await this.loadSrv.create({
      message:'Iniciando Sesión',
      duration:3000});
    if (this.usuario === 'admin' && this.pass === '1234') {
        await load.present();
        await lastValueFrom(timer(500));
        await load.dismiss();
      this.NavController.navigateForward('/inicio');
    } else {
        const toast = await this.toastController.create({
        message: 'Usuario o contraseña incorrecta',
        duration: 2000, 
        position: 'bottom', 
        color: 'medium'
      });
        
        await load.present();
        await lastValueFrom(timer(500)); 
        await load.dismiss();
        toast.present();
    
    }
  }
}
