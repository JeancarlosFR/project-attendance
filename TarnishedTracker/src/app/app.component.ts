import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {initializeApp}  from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  async ngOnInit() {
    //veremos si no estamos en un celular
    if(!Capacitor.isNativePlatform()){

      const firebaseConfig = {
        apiKey: "AIzaSyC9BLA6zpuKQtTlktsXPyykcnAuLANE3x0",
        authDomain: "tarnishedtracker.firebaseapp.com",
        projectId: "tarnishedtracker",
        storageBucket: "tarnishedtracker.appspot.com",
        messagingSenderId: "661959160814",
        appId: "1:661959160814:web:0a3e8b4c57bb57c53e14ff"
      };

      initializeApp(firebaseConfig)
      console.log('Firebase Web Initialized')

    }
  }
}
