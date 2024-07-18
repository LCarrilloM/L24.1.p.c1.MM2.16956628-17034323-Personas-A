export default class Cl_persona{
    constructor(){
        this.cantP=0;
        this.cantPM=0;
        this.cantPH=0;
    }

    procesarSexo(sx){
        this.cantP++;

        if(sx.sexo=="F"){
            this.cantPM++;
        }

        if(sx.sexo=="M"){
            this.cantPH++;
        }

    }

    devCantP(){
        return this.cantP;
    }

    devCantPME(){
        return this.cantPM;
    }

    porcM(){
        return (this.cantPM/this.cantP)*100;
    }
    
    moh(){
        if(this.cantPM>this.cantPH){
            return "Hay más mujeres";
        }
        if(this.cantPM<this.cantPH){
            return "Hay más Hombres";
        }
    }

}