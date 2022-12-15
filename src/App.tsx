import { useState, useEffect } from 'react'
import './App.css'
import {Link} from 'react-router-dom'; 
import { Rotas } from './router/routes'

function App() {
  return (
    <>   
    <div> 
      <ul> 
        <li><Link to='/'>Home</Link></li> 
        <li><Link to='/alunos'>Alunos</Link></li> 
        <li><Link to='/materias'>Materias</Link></li> 
      </ul> 
      <hr /> 
      <Rotas />        
    </div>    
  </> 
  );
}

export default App
