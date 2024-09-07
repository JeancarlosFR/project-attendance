import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarNuevaTareaPageModule } from '../agregar-nueva-tarea/agregar-nueva-tarea.module';
import { AgregarNuevaTareaPage } from '../agregar-nueva-tarea/agregar-nueva-tarea.page';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  todoList = [{
    //ITEM 1
    name: 'Desarrollo de App Moviles',
    date: '09-08-2024',
    priority: 'Alta',
    category: 'Evaluación 1'


  },
  {
    //ITEM 2
    name: 'Calidad de software',
    date: '09-25-2024',
    priority: 'Baja',
    category: 'Charla'





  },
  {
    //ITEM 3
    name: 'Etica',
    date: '09-25-2024',
    priority: 'Media',
    category: 'Evaluación 1'

  },
  {
    //ITEM 4
    name: 'Ingles',
    date: '09-26-2024',
    priority: 'Baja',
    category: 'Quiz 1'

  }



]
  //Se almacena la fecha actual que tenemos
  fechaActual : number = Date.now();

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  //METODO PARA AGREGAR TAREAS
  async agregarTareas(){
    const modal = await this.modalCtrl.create({

      component: AgregarNuevaTareaPage
    })

    modal.onDidDismiss().then(newTaskObject => {console.log(newTaskObject.data);

    })
    //UNA VEZ SE CREA EL MODAL HACE OVERLAY
    return await modal.present()

  }

}
