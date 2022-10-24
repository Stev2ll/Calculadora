import './App.css';
import Logo from './img/MI-Logo.gif'
import Boton from './componentes/Botones'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear';
import {useState} from 'react';
import { evaluate} from 'mathjs';

function App() {

    const [input, setInput] = useState('');

    const agregarInput = val =>{
      setInput(input + val);
    };

    const calcularResultado = () =>{
      if(input){
        setInput(evaluate(input));
      }
      else{
        alert("Porfavor ingresar valores")
      }
    };


  return (
    <div className="App">
        <div className='contenedor-logo'>
          <img
            src={Logo}
            className='Mi-logo'
            alt='Logo de Porgramación time'
          />
        </div>
        <div className='contenedor-calculadora'>
          <Pantalla
            input={input}
          />
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>CLEAR</BotonClear>
          </div>
        </div>
        <footer className='Autor'>
          <h3>create by Stev2ll</h3>
        </footer>
    </div>
  );
}

export default App;
