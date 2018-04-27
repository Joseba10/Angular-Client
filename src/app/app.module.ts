import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';

//Servicios
import { CancionesService } from './providers/canciones.service';

//Pipes


@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CancionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
