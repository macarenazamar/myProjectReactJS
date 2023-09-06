const heroes = ["Wanderwoman", "Superman", "Spiderman", "Batman",]
console. log(heroes.length); // muestra 4
console.log(heroes[3]); // muestra Batman (ultima posicion del array)
heroes.push("Thor") // agrego Thor al array
console.log(heroes[4]); //muestra Thor

//Tener acceso a los elementos del DOM

const showButton = document.getElementById("show")
const hideButton = document.getElementById("hide")
const searchInput = document.getElementById("search")
const lista = document. getElementById("list")

//Aniadir funcionalida para mostrar personajes

//al precionar el boton quermos que se muestre la lista
// Primero se accede al elemento (hay tres maneras) (?)1)con listener 2)
//con listener, el primer elemento es que evento va a escuchar (click), el segundo parametro hay que enivarle la funcion que se va a ejecutar al hacer click, llamada funcion callback en este caso lo hacemos con una funcion flecha se lo podria hacer con una funcion afuera y luego llamarla. En este caso la funcion va a estar vacia
showButton.addEventListener('click', ()=> {
    //lo que queremos que se ejecute cuando hacemos click es que se incorpere los heroes a la lista. Hay que hacer un bucle con cada uno de los elementos e ir incorporandolos a una variable auxiliar
    let content = ''; 
    for (const hero of heroes) {
        content += `<li>${hero}</li>`
    }
    lista.innerHTML = content
})

//Add funcionalidad para ocultar personajes
//con lent se podria sacar de a uno (?)
 
hideButton.addEventListener(`click`, ()=> {
    lista.innerHTML = ''
})

//Mostrar solo los filtrados

searchInput.addEventListener('keyup', (event)=> {
    console.log(event. target. value);
    const filtro = event.target.value
    //usamos funciones propias de ecmascript 6 las mas basicas son: filter, find, map
    const heroesFiltrados = heroes.filter(hero => hero.toLowerCase().includes(filtro.toLowerCase()))
    console.log(heroesFiltrados);
    let content = ''; 
    for (const hero of heroesFiltrados) {
        content += `<li>${hero}</li>`
    }
    lista.innerHTML = content

})




