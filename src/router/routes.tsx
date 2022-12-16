import React from "react";
import { Route, Routes } from "react-router-dom";

import {Components} from "../components/"
import {Aluno} from "../components/Aluno/";
import {Professor} from "../components/Professor/";
import {Materia} from "../components/Materia/";
import { GetAllAlunos } from '../components/Aluno/GetAllAlunos'
import { GetAllProfessor } from '../components/Professor/GetAllProfessor'
import { GetAllMaterias } from '../components/Materia/GetAllMaterias'
import { PostAluno } from '../components/Aluno/PostAluno'


export const Rotas = () => {
   return(
       <Routes>
        <Route path='/' element={<Components/>} />
        <Route path='/alunos' element={<Aluno/>} />
        <Route path='/professor' element={<Professor/>} />
        <Route path='/materias' element={<Materia/>}/>
        <Route path='/alunosAll' element={<GetAllAlunos/>}/>
        <Route path='/professoresAll' element={<GetAllProfessor/>}/>
        <Route path='/materiasAll' element={<GetAllMaterias/>}/>
        <Route path='/alunosPost' element={<PostAluno nome='Julio' periodo='Noite'/>}/>
       </Routes>
   )
}
