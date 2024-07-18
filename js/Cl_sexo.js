export default class Cl_sexo{
    constructor(nombre,sexo){
        this.nombre=nombre;
        this.sexo=sexo;
    }

    setNombre(n){
        this._nombre=n;
    }

    setSexo(s){
        this._sexo=s;
    }

    getNombre(){
        return this._nombre;
    }

    getSexo(){
        return this._sexo;
    }
}