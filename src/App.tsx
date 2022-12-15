import { useState, useEffect } from 'react'
import './App.css'

import { Components } from './components';

interface Repository {
  full_name: string,
  description: string,
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() =>
    {
      fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => {
        setRepositories(data);
      })
    },
    []
  )

  return (
    <div className="App">
      <ul>
        {repositories.map(repo => {
          return (
              <li key={repo.full_name}>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </li>
            )
        })}
      </ul>
    </div>
  )
}

export default App
