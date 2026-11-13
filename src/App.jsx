import Corporate from "./Clase4/Corporate"
import Curso from "./Clase4/Curso"
import Cursos from "./Clase4/Cursos"
import Empleos from "./Clase4/Empleos"
import Header from "./Clase4/Header"
import { Routes, Route } from "react-router-dom"
import ThemeContextProvider from "./Clase6/context/ThemeContext"
import CartContextProvider from "./Clase6/context/CartContext"
import Cart from "./Clase6/Cart"
import APIXML from "./Clase7/APIXML"
import Promesas from "./Clase7/Promesas"
import APIFetch from "./Clase7/APIFetch"
import APIAxios from "./Clase7/APIAxios"

function App () {
  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<APIAxios />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/empleos" element={<Empleos logueado={true} />} />
            <Route path="/corporate" element={<Corporate logueado={true} />} />
            <Route path="/curso/:id" element={<Curso />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App