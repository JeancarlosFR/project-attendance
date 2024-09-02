import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() titulo: string = 'Título por defecto';

  constructor(private navCtrl:NavController) { }

  ngOnInit() {}

  volver() {
    this.navCtrl.back();
  }

}
