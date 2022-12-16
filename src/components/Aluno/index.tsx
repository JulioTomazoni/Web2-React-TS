import { Link } from "react-router-dom"

export const Aluno = () => {
  return (
    <div className="Div-padrao">
      <Link to={'/alunosPost'}>
        <button className="Cadastrar">Cadastrar</button>
      </Link>
      <Link to={'/alunosAll'}>
        <button className="Listar">Listar</button>
      </Link>
      
    </div>
    )
}