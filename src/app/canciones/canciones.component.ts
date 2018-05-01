import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../providers/canciones.service';
import { Cancion } from '../model/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  //Canciones
    canciones:Cancion [];
    cancionSeleccionada: Cancion;


  constructor(private cancionesService: CancionesService) {
    
    console.log('CancionesComponent constructor')
  
     //Inicializar Variables
     this.canciones=[];
     this.cancionSeleccionada = new Cancion (-1,"");
this.mockData();
     

    }
 

  ngOnInit() {
    console.log('CancionesComponent ngOnInit');
    //llamadas a los servicios
    this.cancionesService.getAll().subscribe(
      result=>{
        console.log('response correcto %o', result);
        //let cancion: Cancion;
        result.forEach( element => {
            
            this.canciones.push( element );
        });
        
      },
      error=>{
        console.warn(error);
      }
);
  }
  
  eliminar( id: number ){
    console.log(`CancionesComponent eliminar ${id}`);
}

  mockData(){

   /* this.canciones.push(new Cancion(1,"Macarena"));
     this.canciones.push(new Cancion(2,"Beethoven"));
     this.canciones.push(new Cancion(3,"Un Paseo"));
     this.canciones.push(new Cancion(4,"Salidos de Emergencia"));
     this.canciones.push(new Cancion(4,"Jump"));*/
  }

}
