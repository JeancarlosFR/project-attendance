import { CommonModule } from '@angular/common';
import {Component,OnInit, Input,NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule,RouterModule],
})
export class ButtonComponent  implements OnInit {

  @Input() mensaje: string = 'Mensaje por defecto';
  @Input() tipoBoton: string = 'stroked';
  @Input() url: string | null = null;
  constructor() { }

  ngOnInit() {}

}
