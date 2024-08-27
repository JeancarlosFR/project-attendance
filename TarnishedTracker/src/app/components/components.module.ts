import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatSlideToggleModule,
    InputComponent,
    ButtonComponent,
    MatDividerModule
  ],
  exports: [HeaderComponent, MatSlideToggleModule, InputComponent, ButtonComponent,MatDividerModule]
})
export class ComponentsModule { }
