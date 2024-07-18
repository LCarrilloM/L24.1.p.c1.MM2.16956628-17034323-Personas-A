/**PERSONAS-A
Sea el nombre y el sexo de varias personas (F-M). 
Se necesita un programa que lea estos
datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, 
más mujeres o ambos por igual.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, 
María, Luz, Rafael, Liz, Marcos y Leo; 
la salida requerida presenta el siguiente formato:

Porcentaje de mujeres procesadas: 58.33%
Hay más mujeres
 */


import Cl_persona from "./Cl_persona.js";
import Cl_sexo from "./Cl_sexo.js";

let per1=new Cl_sexo ("Luisa", "F");
let per2=new Cl_sexo ("Ana","F");
let per3=new Cl_sexo ("Jose","M");
let per4=new Cl_sexo ("Carmen","F");
let per5=new Cl_sexo ("Rosa","F");
let per6=new Cl_sexo ("Jose","M");
let per7=new Cl_sexo ("Maria","F");
let per8=new Cl_sexo ("Luz","F");
let per9=new Cl_sexo ("Rafael","M");
let per10=new Cl_sexo ("Liz","F");
let per11=new Cl_sexo ("Marcos","M");
let per12=new Cl_sexo ("Leo","M");

let persona=new Cl_persona();

persona.procesarSexo(per1);
persona.procesarSexo(per2);
persona.procesarSexo(per3);
persona.procesarSexo(per4);
persona.procesarSexo(per5);
persona.procesarSexo(per6);
persona.procesarSexo(per7);
persona.procesarSexo(per8);
persona.procesarSexo(per9);
persona.procesarSexo(per10);
persona.procesarSexo(per11);
persona.procesarSexo(per12);

let salida=document.getElementById("salida");

salida.innerHTML+= "Persona-A";
salida.innerHTML+="<br><br>Porcentaje de mujeres procesadas:  " +persona.porcM().toPrecision(4);
salida.innerHTML+="%"
salida.innerHTML+="<br>"  +persona.moh();
