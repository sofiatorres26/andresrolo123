console.log("hola mundo owo");//imprimir por consolas
// //comentario en linea
/* comentario
 en
varias
 lineas
 o
 multilineas
 */

 //variable
 /*son espacios de memoria que almacenan la informacion
 existen varios tipos de variables en js, pero generalmente se utilizan los siguientes: 
 string: almacena cadenas de texto. Se debe declarar o asignar el valor entre comillas 
 int: almacena numeros enteros.
 double: almacena numeros de reales.
 boolean: almacena valores de verdad.(true,false)
 */
//declarar variables 
/*declara una variable es crearla,decirle al lenguaje como se llama la variable e indicarle que ya existe.
para declara en variable se puede utilizar ya sea la palabra reservada var o let
*/
var nombre;
console.log(nombre);
/*inicializar variable
para inicializar variables es necesario asignar un valor cuando se crea esta variable
*/
var apellido="revellon y torres"
console.log(apellido); 
//asignar un valor:
/*asignar un valor se hace mediante el signo igual, se debe hacer sobre una variable que ya fue declarada.
*/
nombre=("andres y sofia");
console.log (nombre + " " + apellido);
//desde otra variable
var edad=16;
edadEstudiante= edad; 
// desde el teclado 
var gradoEstudiante=prompt("ingrese el grado");
console.log("el grado es: " + gradoEstudiante);
/*constantes: son valores que una vez inicialiados no pueden cambiar lo q almacenan. Se crea con la palabra reservada const,el nombre de las constantes se escribe todo en mayuscula para diferenciarlo de las variables
*/
const PI= 3.1416; 
//PI= 5;
//imprimir por consola
//simple
console.log("mensaje");
console.log(nombre);
//concatenado
console.log("la edad es" + edad + "años");

