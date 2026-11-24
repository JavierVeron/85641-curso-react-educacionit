import Corporate from "./Clase4/Corporate"
import Curso from "./Clase4/Curso"
import Cursos from "./Clase4/Cursos"
import Empleos from "./Clase4/Empleos"
import Header from "./Clase4/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ThemeContextProvider from "./Clase6/context/ThemeContext"
import Cart from "./Clase6/Cart"
import Contador from "./Clase10/Contador"
import Tareas from "./Clase10/Tareas"

function App () {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Cursos />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/empleos" element={<Empleos logueado={true} />} />
            <Route path="/corporate" element={<Corporate logueado={true} />} />
            <Route path="/curso/:id" element={<Curso />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App