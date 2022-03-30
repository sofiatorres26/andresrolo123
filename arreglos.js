/*es una estructura que almacena cualquier tipo de dato y en cualquier cantidad, es decir, string, in , double, aray, objetos, entre otros. los arreglos o arays tienen operaciones como insertar, eliminar, modificar y consultar.
la declaracion de un arreglo se hace con corchetes [] / alt + 91 y los elemntos se separan con comas alt+, tambien se crean o se separan con las palabras var o let, seguidas del nombre de la regla*/
var miPrimerArreglo= ["Andres",14];
console.log(miPrimerArreglo);
//arreglo de arreglos
var notaEst=[["Andres",4.5],["markus",4.2]];
console.log(notaEst);
//consultar segunun su poscion
//recordar que las posiciones de un vector o arreglo comienzan desde cero 0
console.log(miPrimerArreglo[0][0]);
//consultar posiciones de arreglos dentro arreglos
//primero se accede a la posicion de arreglo mas grande y luego a las posiciones de arreglos internos
console.log(notaEst[0][1]);
console.log(notaEst[1][0]);
//modificar elemento
// debe indicar la psoicion del elemnto y luego se le asigna el valor :D
miPrimerArreglo[0]="mario";
console.log(miPrimerArreglo);
notaEst[1][0]= "laura"
console.log(notaEst[1])
miPrimerArreglo[1] = 18;
console.log(miPrimerArreglo[1])
notaEst[0][1] =4.8;
console.log(notaEst[0][1])
// agrregar un elemento completo
miPrimerArreglo.push("10B");
console.log(miPrimerArreglo);
miPrimerArreglo.unshift("gomez")
console.log(miPrimerArreglo)
//eliminar elemento del arreglo
miPrimerArreglo.pop()
console.log

//actividad quiz ANDRES :D

var materia = ["analisis","tecnologia","desarrollo"];
console.log(materia);
materia[2] = "BBDD";
console.log(materia);

materia.unshift("introduccion");
console.log(materia);


