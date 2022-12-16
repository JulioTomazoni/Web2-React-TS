import { useState, useEffect } from 'react';
import '../../App.css';

interface IAluno {
  id: number,
  nome: string,
  periodo: string,
}

export const GetAllAlunos = () => {
  const [data, getData] = useState([]);
  const URL = "http://localhost:3000/aluno";
 
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
 
      .then((response) => {
        console.log(response);
        getData(response);
      });
  };
  
  return (
    <div>
      <table>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Período</th>
        </tr>
        {data.map((alunos: IAluno, i) => (
          <tr key={i}>
            <td>{alunos.id}</td>
            <td>{alunos.nome}</td>
            <td>{alunos.periodo}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
