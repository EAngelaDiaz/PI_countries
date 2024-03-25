import { Link } from "react-router-dom"

export const orm = () => {
  return(
    <div>
      <Link to= '/home'><button>Home</button></Link>
      <form onSubmit={''}>
          <div>
            <label>Nombre:</label>
            <input></input>
          </div>
          <div>
            <label>Dificultad:</label>
            <input></input>
          </div>
          <div>
            <label>Duración:</label>
            <input></input>
          </div>
          <div>
            <label>Temporada:</label>
            <input></input>
          </div>
          <div>
            <label>Paises:</label>
            <input></input>
          </div>
          <div>
            <button>CREAR</button>
          </div>
      </form>
    </div>
    )
}

