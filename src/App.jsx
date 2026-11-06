/* import { useState } from "react"
import CicloDeVida from "./Clase4/CicloDeVida" */
import Corporate from "./Clase4/Corporate"
import Curso from "./Clase4/Curso"
import Cursos from "./Clase4/Cursos"
import Empleos from "./Clase4/Empleos"
import Header from "./Clase4/Header"
import { Routes, Route } from "react-router-dom"

function App () {
  /* const [visible, setVisible] = useState(true);

  const ocultarComponente = () => {
    setVisible(false)
  } */

  return (
    <>
      {/* {visible ? <CicloDeVida /> : ""}
      <p><button className="btn-outline theme-primary" onClick={ocultarComponente}>Ocultar Componente</button></p> */}

      <Header />
      <Routes>
        <Route path="/" element={<Cursos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/empleos" element={<Empleos logueado={false} />} />
        <Route path="/corporate" element={<Corporate logueado={false} />} />
        <Route path="/curso/:id" element={<Curso />} />
      </Routes>
    </>
  )
}

export default App