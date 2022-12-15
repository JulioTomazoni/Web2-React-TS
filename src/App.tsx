import { useState, useEffect } from 'react'
import './App.css'

import { Components } from './components';

function App() {
  const [data, getData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";
 
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
      <h1>How Display API data in Table in React JS</h1>
      <table>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Descripation</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App
