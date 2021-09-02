import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


// abstract class Nombre {
//     public nombrePropiedad?: string; //undefined
//     private apellidoPropiedad: string = 'Eguez';
//     protected edad=1; //number (Duck Typing)
//     static comun: number = 10;
//     propiedadPublica: string;
//     constructor(
//         propiedadPublicaParametro: string, // parametro
//         public propiedadRapido: string, // transforma una propiedad
//     ) {
//         this.propiedadPublica = propiedadPublicaParametro;
//         this.propiedadRapido;
//     }
//
//     public funcionPublica (parametroString: string): void {
//         //no hay return = undefined
//     }
//
//     private funcionPrivada (parametroString: string, //? puede ser undefined
//                             parametroNumber?: number){ //omitir : void(defecto)
//         //no hay return = undefined
//     }
//     protected funcionPublic(): number {
//         return 1;
//     }
//
//     static funcionEstatica(): string{
//         return "string";
//     }
//
// }




//comandos ejecutar proyecto
//npm run start


// //TypeScript
// //Tipos de Variables
//
// //MUTABLES (reasignar -> = )
// var variableUno = 1;
// let variableDos = 2;
//  variableUno =3;
//  variableDos = 4;
//
//  //INMUTABLES (No se pueden reasignar X -> ! =)
// const variableTres = 5;
//
// //VARIABLES PRIMITIVAS
// //PRIMITIVAS PRIMITIVAS
// const numeroEntero: number =1;
// const numeroFlotante: number = 1.2;
// const soyEstudiante: boolean = true; //false
// const noDefinido = undefined;
// const noHayNada = null;
// const fecha: Date = new Date();
//
// //Duck Typing
// const textoDos = 'Edison';
// let cualquierCosa: any = 'Edison';
// cualquierCosa = 1;
// cualquierCosa = true;
// cualquierCosa = new Date();
//
// //Clases
// class Usuario{
//     constructor(
//         public nombre: string,
//         public apellido:string
//     ) {
//     }
// }
//
// const usuario: Usuario = new Usuario('Edison', 'Cabrera')
// usuario.nombre;
// usuario.apellido;
//
// interface UsuarioInterface {
//     nombre: string,
//     apellido: string,
//     edad?: number; // ? => Opcional / Valor por defecto es undefined
// }
//
// //PRIMITIVAS
// let edadAntigua = 22;
// let otraEdad = edadAntigua; //valor
// edadAntigua +=1; //23
// otraEdad -=1; // 21
//
// //Objeto
// let objetoEdad ={
//     edad:22,
// }
//
//
// let otraEdadObjeto = objetoEdad; //REFERENCIA
// otraEdadObjeto.edad = otraEdadObjeto.edad +1; //23
// console.log(otraEdadObjeto.edad);
// objetoEdad.edad; //23
// console.log(otraEdadObjeto.edad);
// objetoEdad.edad; //24
// let otraEdadObjetoClonado = {
//     ...objetoEdad
// }; //Clonación objetos
// const arregloEjemplo = [1,2,3]
// let arregloClonado = [...arregloEjemplo];// clonación arreglos
//
// const arregloNumeros: number[] = [1,2,3,4,5];
// function funcionConNombre(){
//
// }
//
// const indice = arregloNumeros.findIndex(
//     (numero)=>{ //funcion anónima xq no tiene nombre
//         const elValorEsIgualAtres: boolean = numero ===3;
//         return elValorEsIgualAtres //Condición -> boolean
//     },
//     function(){ -> funciona anónima xq no tiene nombre
//     }
// );
//
// arregloNumeros[indice]=6;
// //agregar al final
// arregloNumeros.push(6);
// //agregar al principio
// arregloNumeros.unshift(0)
//
// //CONDICIONES -> Truty y Falsy
// const numeroOrden =0;
//
// if(numeroOrden){
//     console.log('Truty');
// }else{
//     console.log('Falsy')//FALSY
// }
//
// if(1){
//     console.log('Truty');
// }else {
//     console.log('Falsy');
// }
//
// if (-1){
//     console.log('Truty'); //TRUTY
// }else {
//     console.log('Falsy');
// }
//
// if(""){
//     console.log('Truty');
// }else{
//     console.log('Falsy')//FALSY
// }
//
// if("a"){
//     console.log('Truty');
// }else {
//     console.log('Falsy');
// }
//
// if ({}){
//     console.log('Truty'); //TRUTY
// }else {
//     console.log('Falsy');
// }
// if ({a:1}){
//     console.log('Truty'); //TRUTY
// }else {
//     console.log('Falsy');
// }
//
//
// if([]){
//     console.log('Truty');
// }else{
//     console.log('Falsy')//FALSY
// }
//
// if([1]){
//     console.log('Truty');
// }else {
//     console.log('Falsy');
// }
//
// if (null){
//     console.log('Truty'); //TRUTY
// }else {
//     console.log('Falsy');
// }
// if (undefined){
//     console.log('Truty'); //TRUTY
// }else {
//     console.log('Falsy');
// }