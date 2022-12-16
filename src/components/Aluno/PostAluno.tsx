import React from "react";
import axios from "axios"

interface IAluno {
  nome: string,
  periodo: string,
}

const path = '/aluno'
const baseURL = 'http://localhost:3000' + path;

export const PostAluno = ({nome, periodo}: IAluno) => {
  const [post, setPost] = React.useState(null);


  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((res) => {
      setPost(res.data);
    })
  }, [])

  function createPost(){
    axios.
    post(baseURL, {
      nome: nome,
      periodo: periodo 
    })
    .then((res) => {
      setPost(res.data);
    });
  }

  if (!post) return <div>No post!</div> 

  return (
    <div>
      <p>{nome}</p>
      <p>{periodo}</p>
      <button onClick={createPost} >Create Post</button>
    </div>
    )

}