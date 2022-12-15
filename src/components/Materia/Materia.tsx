import { useState, useEffect } from 'react';
import '../../App.css';

interface IMaterias {
  id: number,
  materia: string,
}

export const Materia = () => {
  const [data, getData] = useState([]);
  const URL = "http://localhost:3000/materias";
 
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
          <th>Matéria</th>
        </tr>
        {data.map((materias: IMaterias, i) => (
          <tr key={i}>
            <td>{materias.id}</td>
            <td>{materias.materia}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
