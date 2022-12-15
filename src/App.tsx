import { useState, useEffect } from 'react'
import './App.css'
import {Link} from 'react-router-dom'; 
import { Rotas } from './router/routes'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

function App() {
  return (
    <ChakraProvider>
   
    <div> 
      <ul className='Menu'> 
        <li className='botao'><Link to='/'>Home</Link></li> 
        <li className='botao'><Link to='/alunos'>Alunos</Link></li> 
        <li className='botao'><Link to='/materias'>Materias</Link></li> 
      </ul> 
      <hr /> 
      <Rotas />        
    </div>    
</ChakraProvider>
  );
}

export default App
