import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
  
})
export class AttendancePage implements OnInit {

  

  constructor(private navCtrl: NavController,) { }

  ngOnInit() { }

  volver() {
    this.navCtrl.back();
  }


  
  
}


