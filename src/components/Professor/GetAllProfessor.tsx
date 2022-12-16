import { useState, useEffect } from 'react';
import '../../App.css';

interface IProfessor {
  id: number,
  nome: string,
  materia: string,
}

export const GetAllProfessor = () => {
  const [data, getData] = useState([]);
  const URL = "http://localhost:3000/professor";
 
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
          <th>Matéria</th>
        </tr>
        {data.map((professores: IProfessor, i) => (
          <tr key={i}>
            <td>{professores.id}</td>
            <td>{professores.nome}</td>
            <td>{professores.materia}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
