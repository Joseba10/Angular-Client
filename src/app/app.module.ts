import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Componentes
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';

//Servicios
import { CancionesService } from './providers/canciones.service';
import { HttpClientModule } from '@angular/common/http';

//Pipes


@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CancionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
