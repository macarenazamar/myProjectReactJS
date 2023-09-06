//Destructurin de objetos
const persona1 = {
    nombre: "Leonel",
    apellido: "Messi",
    edad: 36,
    estadoCivil: "casado",
    cantidadCampeonatos: 43,
    nacionalidad: "argentino"
}
// Propiedad es nombre, valor es Leonel, los valores pueden ser string, number, otro objeto, un array

//De este objeto: persona1 solo me interesa la propiedad nombre, hay dos maneras

console.log(persona1.nombre);

//a hora quiero tener la propiedad aparte y despues usarla para otra cosa = para esto usamos el destructuring, me quedo la variable llamada apellido que la puedo usar para otra cosa, declaramos una nueva posicion de memoria, usando , se puede acceder a mas propiedades. Tambien se puede cambiar el apellido a la propiedad

const {apellido, edad, cantidadCampeonatos: campeonatos} = persona1;

//al cambiar el nombre de la propiedad cantidadCampeonatos por campeonatos ya no puedousar mas cantidadCampeonatos porque me va a tirar que es una variable no definida, ahora usamos campoenatos

console.log(apellido);
console.log(campeonatos);

//para poder ver en la terminal todo esto:
//1) Pararnos en la carpeta que corresponde
//con ls listo las carpetas y archivos
// para moverme a las otras carpetas cd cange director
// para subir un nivel de la carpeta en la que estamos es cd ..
//ahora ejecutamos el archivo: node nombreArchivo


//Destructurin de arays
const personajes = ["Homero", "Marge", "Lissa", "Bart", "Magie"]

//accedemos a las distintas posiciones del array personajes
console.log(personajes[2]); //es lissa

//en la terminal para no volver a escribir node class.js hacemos con la flecha para arriba y se ejecuta el ultimo comando que hicimos 

//ahora la primer personaje lo quiero guardar en una variable a parte para poder usarlo despues

const [primerPersonaje,segundoPersonaje, tercerPersonaje, ...restoPeronajes] = personajes;
//se accede por orden es decir: const [primerPersonaje, segundoPersonaje, tercerPersonaje] = personajes;
console.log(primerPersonaje);
console.log(tercerPersonaje);
//para acceder al resto de los personajes es con el spred operator ...restoPeronajes. No son palabras reservadas si el orden, por eso mejor usar ingles

console.log(restoPeronajes);


//Spread operator, es muy util cuando hay que hacer una copia tanto en objeto como en array 

const persona1additional = {
    ...persona1,
    sueldo: '50 K UDS'    
}
console.log(persona1additional);

const personasjeCopia = [...personajes]
console.log(personasjeCopia);
//agarra todo lo que tenia el array personajes y lo coloca en una nueva variable llamada personajesCopia, esta nueva variable ocupa un nuevo espacio en la memoria, es decir, es independiente de personajes. Si no hago el spred le asigino el mismo lugar en memoria

//Funcion map, find: metodos de arrays
// Funcion map: mapea cada uno de los elementos del array y hacerle algun procesamiento y devolver con eso procesado un nuevo array
const personajesProcesados = personajes.map(personajes => {
    return `<p>${personajes}</p> `
})
console.log(personajesProcesados);
//ejecutamos el codigo haciendo en la terminal node class.js

//Funcion find: busca dentro del array

const personajeEncontrado = personajes.find(personaje => personaje === "Bart")
console.log(personajeEncontrado);




// Creamos la aplicacion con el comando en la termianl npm install -g create-react-app, lo que estamos instalando es el paquete global que nos va a servir para crear apliaciones desde cero con react
//lugego create-react-app my-app, se crea un nuevo archivo llamado my-app

// Que encontramos en my-app
// package.json son todas las dependencias que tenemos instaladas en el proyecto, cada proyecto tiene sus propios paquetes, dependencias. Estan declaradas las dependencias del proyecto
  
//Los paquetes los vemos en la carpeta node_modules, son todos los archivos necesarios para que funcionen las dependencias 

// en .gitignore ahora esta la carpeta node_modules para que no pese al subirlo, luego vamos a ir habilitando los modulos necesarios para el proyecto

//pacjage.json tambien tiene los scripts, van a definir como va a funcionar la app utilizando la linea de comandos por ejemplo voy a usar un script haciendo: npm start y nos va a levantar el proyecto en el navegador

// con control c paro la ejecucion del server, lo levanto denuevo npm start

