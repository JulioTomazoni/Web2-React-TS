import { Link } from "react-router-dom"

export const Professor = () => {
  return (
    <div className="Div-padrao">
      <button className="Cadastrar">Cadastrar</button>
      <Link to={'/professoresAll'}>
        <button className="Listar">Listar</button>
      </Link>
      
    </div>
    )
}