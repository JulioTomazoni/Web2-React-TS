import * as React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import {Link} from 'react-router-dom'; 
import { Rotas } from './router/routes'

function App() {
  return (
      <div>
        <nav className='navMenu'>
          <a className='active'><Link to='/'>Home</Link></a>
          <a><Link to='/alunos'>Alunos</Link></a> 
          <a><Link to='/professor'>Professores</Link></a>
          <a><Link to='/materias'>Materias</Link></a>
        </nav>
          <Rotas/>     
      </div>           
  );
}

export default App
