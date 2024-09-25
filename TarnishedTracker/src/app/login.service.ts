import { Injectable } from '@angular/core';
import {FirebaseAuthentication, User} from '@capacitor-firebase/authentication'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Todos los plugins son promesas por ende hay que usar async
export class LoginService {

  nombreUsuario ='';
  usuarioActual = new BehaviorSubject<User | undefined>(undefined);

  //Creamos un metodo que llamaremos cuando firebase se haya cargado
  cargarFirebase!: () => void;
  firebaseCargado = new Promise<void>((resolve)=>{
    this.cargarFirebase = resolve;
  });

  constructor() {

    FirebaseAuthentication.addListener('authStateChange', async (cambio)=>{
      this.usuarioActual.next(cambio.user!);
      //Cuando llamemos este metodo, firebase ya estara cargado y el guard lo sabrá
      this.cargarFirebase();
  });

}

  public get logeado(){
  if(this.usuarioActual.value){
    return true;
  }
    return false;
  }

  public get usuario(){
    return this.usuarioActual.value;
  }

  public async login(usuario:string, password: string){

  const login = await FirebaseAuthentication.signInWithEmailAndPassword({

    email:usuario,
    password:password
  })
    this.usuarioActual.next(login.user!);
    this.nombreUsuario = login.user!.email!;
  }

}
