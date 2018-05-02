import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../providers/canciones.service';
import { Cancion } from '../model/cancion';
import { element } from 'protractor';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  //Canciones
    canciones:Cancion [];
    cancionSeleccionada: Cancion;
    nombreCancion: String;


  constructor(private cancionesService: CancionesService) {
    
    console.log('CancionesComponent constructor')
  
     //Inicializar Variables
     this.canciones=[];
     this.cancionSeleccionada = new Cancion (-1,"");
     this.mockData();
     

    }
 

  ngOnInit() {
    console.log('CancionesComponent ngOnInit');
    this.recargar();
  }

/*Recarga la Pagina*/
recargar(){
  console.log('CancionesComponent recargar');
  this.canciones = [];
  this.cancionesService.getAll().subscribe(
    result=>{
      console.log('    response correcto %o', result);   
      if ( result != null ){     
        result.forEach( element => {
            this.canciones.push( element );
        });    
      }      
    },
    error=>{
      console.warn(error);
    }
  );
}

crearCancion(){
  console.log(`CancionesComponent crearCancion ${this.nombreCancion}`);
}

  
eliminar( id: number ){
  console.log(`CancionesComponent eliminar ${id}`);
  if ( confirm("¿ Quieres eliminar la canción ?") ){
    
    this.cancionesService.delete(id).subscribe(
      result=>{
          this.recargar();
          console.log(`Cancion Eliminada!!!`);
      },error=>{
        console.warn(`Error al eliminar ${error}` );
      }
    );
  }
}

  mockData(){

   /* this.canciones.push(new Cancion(1,"Macarena"));
     this.canciones.push(new Cancion(2,"Beethoven"));
     this.canciones.push(new Cancion(3,"Un Paseo"));
     this.canciones.push(new Cancion(4,"Salidos de Emergencia"));
     this.canciones.push(new Cancion(4,"Jump"));*/
  }

}
