import React, {useState} from 'react';


import Login from './componentes/login'
import Index from './componentes/index';
import FormularioRegistro from './componentes/formularioregistro';



function App() {

const [conectado, setConectado] = useState(false);

const  acceder = (estado) => {
  setConectado(estado)
}

  return (

    conectado ? <Index/>: <Login acceder={acceder}/>
  );
}

export default App;
