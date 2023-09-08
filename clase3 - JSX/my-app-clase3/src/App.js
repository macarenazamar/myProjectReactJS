import './App.css';
import NavBar from './components/NavBar';

function App() {

  //Declarar variables fuera del return y para ver el valor de la variable lo tengo que imprimir entre llaves dentro del return
  let nombre = "Macky"
  const edad = 22
  //Renderizar objetos: hay que acceder propiedad por propiedad
  const datosPersona = {
    pais: "Belgica",
    ciudad: "Gent",
    direccion: "Nieuwewandeling 60"
  }
  return (
    <div className="principal">
      <NavBar/>
      <div className='container'>
        <div className="app">
          <p>{nombre}</p>
          <p>Edad: {edad}</p>
          <h1>Donde vive?</h1>
          <p>{datosPersona.pais}</p>
          <input type="text" placeholder="Registrarse" />
          <button>Ingresar</button>
        </div>

      </div>
      
    </div>
  );
}

export default App;
