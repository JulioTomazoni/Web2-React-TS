import React from "react";
import { Route, Routes } from "react-router-dom";

import {Components} from "../components/index"
import {Aluno} from "../components/Aluno/Aluno";
import {Professor} from "../components/Professor/Professor";
import {Materia} from "../components/Materia/Materia";


export const Rotas = () => {
   return(
       <Routes>
        <Route path='/' element={<Components/>} />
        <Route path='/alunos' element={<Aluno/>} />
        <Route path='/professor' element={<Professor/>} />
        <Route path='/materias' element={<Materia/>}/>
       </Routes>
   )
}
