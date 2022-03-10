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
//operadores
//suma 
var suma;
suma= 5 + 3;
console.log (suma);
let a= 10;
suma= 8 + a;
suma= a + 8;
console.log (suma); 
let b= 20
suma= a + b;
console.log (suma);
//resta
var resultado; 
resultado= a - b;
console.log (resultado);
resultado= b -a;
console.log (resultado);
//multiplicacion 
var producto;
producto= a*b;
console.log (producto);
//orden de operaciones
var res;
res= a* 2; //20
console.log (res);
res= a * 2-1; //19
console.log (res);
res= a* (2-1);  //10
console.log (res);
//residuo
var residuo=12 % 2;//0
console.log(residuo); 
//contadores
//incremento
var incre=1;
console.log(incre);//1
incre=incre + 1;
console.log(incre);//2
incre +=1;
console.log(incre);//3
incret++;
console.log(incre);//4
//decremento
var decre=1;
console.log(decre);//1
decre=decre - 1;
console.log(decre);//2
decre -=1;
console.log(decre)//3
incre--;
console.log(decre)//4
//operaciones aumentadas
//son operaciones que se realizan en una variable y el resultado se guarda en si mismo
var sumaAumento;
sumaAumento +=1;
sumaAumento += 48;//la variable debe tener un valor antes de realizar la operacion
console.log(sumaAumento);
var restaaumento = 20;
restaaumento -= 1;
restaaumento -= 8;
console.log(restaaumento);



productosaumento *= 20;
productoaumento *= 1;
productoaumento *= 8;
console.log(productoaumento);

cocientesaumento /= 20;
cocienteaumento /= 1;
cocienteaumento /= 8;
console.log(cocienteaumento);

//potencia
var exp;
exp = 3**2;
console.log(exp);//9
exp = 3**3;
console.log(exp)//27
// cadenas o texto
//suma de cadenas
var nombre = "Andres y sofi";
var apellido = "revellon y torres <3";
var nombreCompleto = nombre + " " +apellido;
//suma  DE CADENAS
var cadenita1 = "3";
var cadenita2 = "5";
var cadenaTotal = cadenita1 + cadenita2;
//permite conocer la longitud(length.) de una cadena o el tamaño de un vector
//lenght
console.log(nombreCompleto.lenght);
console.log(nombre[3]);//r
//para encontrar el caracter en la ultima posicion de una cadena o un vector se debe buscar la longitud -1(.lenght-1)










