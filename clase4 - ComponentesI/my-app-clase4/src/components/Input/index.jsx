//para crear la base tener activo la extencion ES7+React... y escribir rafce
import React from 'react';
import './styles.css';

//PROPS
//Las porps las definimos dentro de los (), hay dos maneras
//Escribimos porpos dentro de los () esto es para ambar maneras
//Manera 1) Desde el hijo delacaramos un valorPlaseholder, definimos la propos. Y para enviarla en el padre App, dentro del componente colocamos entre llaves los que queremos recibir, en este caso el "Hola"
//Manera 2) Destucturar la posps: Declaro la variablepor afuera del return
//Desestructuro el objeto porpo con const {valorPlaseholder}= porpos y agarro solo la propoiedad correspondiente
//Luego en placeholder solo llamo a la porpiedad que acabo de definir mediante destrucuting: placeholder={valorPlaseholder}
//porps lo que esta entre () no es una palabra reservada, lo puedo llamar como yo quiera, pero por convencion se suele llamar props. Cuando utilizo (props) lo que obtengo es un objeto con todas las porps. Lo que se puede hacer es mediante destucturing llamar solo el valro de especifico que quiero usar en mi componente ({valorPlaseholder}) Esto es simplemente para ahorrar codigo y no tener que hacer el destructirun en el mismo componente 
// Es decir si lo quiero hacer de la maenra dos:

/* const Input = (props) => {
  console.log(props);
  const {valorPlaseholder}= props
  return (
    <input 
      type="text" 
      className='app-input' 
      placeholder={valorPlaseholder}
    />
  )
} */

//Si lo quiero hacer ahorrando codigo: llamas al valor de la porps que te interesa en los parametros, en los () mediante destructuring por eso las {}, luego dentro del return solo lo utilizar. Asi es como se suele usar ahorra pasos

const Input = ({valorPlaseholder}) => {
  console.log({valorPlaseholder});
  return (
    <input 
      type="text" 
      className='app-input' 
      placeholder={valorPlaseholder}
    />
  )
} 

export default Input