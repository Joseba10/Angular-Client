import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const endpoint='http://localhost:8080/cancion/';

@Injectable()
export class CancionesService {

  constructor(private http: HttpClient) {
    console.log('CancionesService constructor');
   }



  getAll(): Observable<any>{
    let url = endpoint;
    console.log(`CancionesService getAll ${url}`);    
    return this.http.get(url);
  } 

  delete(id:number):Observable<any>{
    let url = endpoint+id;
    console.log(`CancionesService Delete ${url}`);
    return this.http.delete(url);
    


  }

}