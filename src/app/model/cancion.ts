export class Cancion{

_id:number;
_nombre:String;

constructor(id:number=-1, nombre:String=""){

console.log('Cancion Constructor');
this._id=id;
this._nombre=nombre;


}
get id(){
    //console.log('Getter');
    return this._id;
}
set id(id:number){
    //console.log('Setter');
    this._id=id;
}


get nombre(){
    //console.log('Getter');
    return this._nombre;
    }
    set nombre(nombre:String){
       // console.log('Setter');
        this._nombre=nombre;
    }
}




