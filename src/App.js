
import './App.css';
import ButtonClicks from './components/ButtonClicks';
import CajaClicks from './components/CajaClicks';
import { useState } from 'react';

function App() {

  const [numero, setNumero] = useState(0)

  function aumentar(){
    setNumero(numero+1)
  }

  function disminuir(){
    setNumero(numero-1)
  }

  function reiniciar(){
    setNumero(0)
  }

  return (
    <div className="App">
      <CajaClicks valor={numero}/>

      <ButtonClicks action="aumentar"  manejarClick={aumentar}/>
      <ButtonClicks action="disminuir" manejarClick={disminuir}/>
      <ButtonClicks action="reiniciar" manejarClick={reiniciar}/>

    </div>
  );
}

export default App;
