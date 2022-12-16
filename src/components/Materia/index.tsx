import { Link } from "react-router-dom"

export const Materia = () => {
  return (
    <div className="Div-padrao">
      <button className="Cadastrar">Cadastrar</button>
      <Link to={'/materiasAll'}>
        <button className="Listar">Listar</button>
      </Link>
      
    </div>
    )
}