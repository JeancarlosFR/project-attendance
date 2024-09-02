import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],

})
export class RegisterPage implements OnInit {

  

    nombre: FormControl= new FormControl('', Validators.required);
    apellidos: FormControl= new FormControl('', Validators.required);
    correoUsuario: FormControl= new FormControl('', [Validators.email, Validators.required]);
    carreraUsuario: FormControl= new FormControl('', Validators.required);
    contrasena: FormControl= new FormControl('');




    form: FormGroup;
    constructor(

      private navCtrl: NavController,

      private fb: FormBuilder
    ) { 
  
      this.form=this.fb.group({
  
        nombre:['', Validators.required],
        apellidos:['',Validators.required],
        correoUsuario:['', [Validators.required, Validators.email]],
        carreraUsuario:['', Validators.required],
        genero: ['', Validators.required],
        contrasena: ['', [Validators.required, Validators.minLength(8)]]
  
      });
  
  
    }

    ngOnInit() {
    }

    
    sendValues(){

      console.log(this.nombre.value);
      this.form.reset();
    }

    volver() {
      this.navCtrl.back();
    }
   

 
  
 

  
}

