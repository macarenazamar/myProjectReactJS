import './App.css';
import NavBar from './components/NavBar';
import Input from './components/Input';
import ItemListContainer from './containers/ItemListContainer';

//App es componente padre, va a ser el que envie las props. Lo que quiero envair es el Hola que aparazca en el plase holder del hijo Input, para eso le pasamos esa info desde el padre App al hijo Input.
//Hay dos maneras de pasar la info. 1) En el padre nombramos la porpo que le quiero enviar y el valor. En el hijo, Input, definimos la props ente los () y luego en el hijo entre {} donde la queremos recibir, en este caso en el plaseholder. Pero primero las definimos en el componente hijo, ejemplo Input, luego para enviarle debemos ponerle nombre a la props en el hijo, nuestra pops se llama valorPlaseholder y para pasarla al hijo hay que ir al hijo Input
//2) Con destructurin, es la que se suele usar: En el padre solo nombramos la prop y la info que quiero enviar, esto no cambia. Lo que cambia es en el hijo
function App() {
  return (
    <div className="principal">
      <NavBar/>
      <div className='container'>
        <ItemListContainer greeting={"Bienvenidos"}/>
        <Input valorPlaseholder={"Hola"}/>
        <div className="app">
        </div>
      </div>
    </div>
  );
}

export default App; // Si hago el export sin default,luego cuando se hace el import, en este caso en index.js, debe ir entre llaves el componente, import {App} from './App'; tengo que hacer destructuring