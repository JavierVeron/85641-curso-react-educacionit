import Curso from "./Curso"
import Imagenes from "./Imagenes"
import Titulo from "./Titulo"

function App () {
  return (
    <div>
      <h1 id="logo">Educación IT</h1>
      <Curso />
      <Titulo />
      <Curso />
      <Imagenes />
    </div>
  )
}

export default App