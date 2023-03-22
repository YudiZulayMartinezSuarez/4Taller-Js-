function mostrarmenu(){
let opcion = -1;
do{
opcion =prompt(`------menu------
1.  lectura de datos
2.  crear objeto
3.  mostrar objeto
4.  crear array
5.  mostar array
6.  eliminar el primer elemento del array
7.  eliminar el ultimo elemento del array
8.  eliminar cualquier elemento del array
9.  agregar elemento al comienzo del array
10. agregar elemento al fianl del array 
11. crear array con objetos
12. iterar array con objetos con FOR
13. iterar array con objetos con forEach
14. iterar array con objetos con map y crear copia
15. proceso personal
0.  salir`);        
alert(menu);
       

switch(opcion) {
    case 1:
     function leerDatos() {
        nombre = prompt("digite su nombre");
        edad = parseInt(prompt("digite su edad"));
       console.log(`Su nombre es ${nombre} y su edad es ${edad}`);
     }
     leerDatos();
     break;
    case 2:
     function crearObjeto() {
       let persona = {
         nombre: "zulay",
         edad: 22,
         profecion: "sistemas"
       };
       console.log(persona);
     }
     crearObjeto()
     break;
    case 3:
     function mostrarObjeto() {
       let persona = {
         nombre: "gabriela",
         edad: 16,
         profecion: "bachiller"
       };
       for (let propiedad in persona) {
         console.log(`${propiedad}: ${persona[propiedad]}`);
       }
     }
     mostrarObjeto()
     break;
    case 4:
     function crearArray() {
       let numeros = [1, 2, 3, 4, 5];
       console.log(numeros);
     }
     crearArray()
     break;
    case 5:
     function mostrarArray() {
       let numeros = [1, 2, 3, 4, 5];
       for (let z = 0; z < numeros.length; z++) {
         console.log(numeros[z]);
       }
     }
     mostrarArray()
     break;
    case 6:
     function eliminarPrimerElemento() {
       let numeros = [1, 2, 3, 4, 5];
       numeros.shift();
       console.log(numeros);
     }
     eliminarPrimerElemento()
     break;
    case 7:
     function eliminarUltimoElemento() {
       let numeros = [1, 2, 3, 4, 5];
       numeros.pop();
       console.log(numeros);
     }
     eliminarUltimoElemento()
     break;
    case 8:
     function eliminarElemento() {
       let numeros = [1, 2, 3, 4, 5];
       let indice = parseInt(prompt("digite el índice del elemento a eliminar"));
       numeros.splice(indice, 1);
       console.log(numeros);
     }
     eliminarPrimerElemento()
     break;
    case 9:
     function agregarAlComienzo() {
       let numeros = [1, 2, 3, 4, 5];
       let elemento = parseInt(prompt("digite el elemento a agregar al comienzo del array"));
       numeros.unshift(elemento);
       console.log(numeros);
     }
     agregarAlComienzo()
     break;
    case 10:
     function agregarAlFinal() {
       let numeros = [1, 2, 3, 4, 5];
       let elemento = parseInt(prompt("digite el elemento a agregar al final del array"));
       numeros.push(elemento);
       console.log(numeros);
     }
     agregarAlFinal()
     break;
    case 11:
     function crearArrayObjetos() {
       let personas = [
         { nombre: "miguel", edad: 25, correo: "ingeniero" },
         { nombre: "leidy", edad: 20, correo: "sistemas" },
         { nombre: "eslendy", edad: 20, correo: "psicóloga" }
       ];
       console.log(personas);
     }
     crearArrayObjetos()
     break;
    case 12:
   function iterarArrayFor() {
     let personas = [
        { nombre: "miguel", edad: 25, correo: "ingeniero" },
        { nombre: "leidy", edad: 20, correo: "sistemas" },
        { nombre: "eslendy", edad: 20, correo: "psicóloga" }
       
     ];
     for (let z = 0; z < personas.length; z++) {
       console.log(`${personas[z].nombre} - ${personas[z].edad} años - ${personas[z].correo}`);
     }
   }
   iterarArrayFor();

     break;
    case 13:
     function iterarArrayForEach() {
       let personas = [
        { nombre: "miguel", edad: 25, correo: "ingeniero" },
        { nombre: "leidy", edad: 20, correo: "sistemas" },
        { nombre: "eslendy", edad: 20, correo: "psicóloga" }
       ];
       personas.forEach(function(persona) {
         console.log(`${persona.nombre} - ${persona.edad} años - ${persona.correo}`);
       });
     }
     iterarArrayForEach()
     break;
    case 14:
     function iterarArrayMap() {
       let personas = [
        { nombre: "miguel", edad: 25, correo: "ingeniero" },
        { nombre: "leidy", edad: 20, correo: "sistemas" },
        { nombre: "eslendy", edad: 20, correo: "psicóloga" }
       ];
       let personasCopia = personas.map(function(persona) {
         return { ...persona };
       });
       console.log(personasCopia);
     }
     iterarArrayMap()
     break;
    case 15:
     function procesoPersonal() {
       let numeros = [5, 7, 3, 1, 9];
       let suma = 0;
       for (let z = 0; z < numeros.length; z++) {
         suma += numeros[z];
       }
       let promedio = suma / numeros.length;
       console.log(`El promedio de los números es ${promedio}`);
     }
     procesoPersonal()
     break;
    case 0:
     alert("Saliendo del menu");
     break;
   default:
     alert("No es correcto tu elección");
     break;
  }
 }while (opcion != 0);
}
