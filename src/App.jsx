import Corporate from "./Clase4/Corporate"
import Curso from "./Clase4/Curso"
import Cursos from "./Clase4/Cursos"
import Empleos from "./Clase4/Empleos"
import Header from "./Clase4/Header"
import { Routes, Route } from "react-router-dom"
import Layout from "./Clase6/Layout"
import WithPosts from "./Clase6/WithPosts"
import ThemeContextProvider from "./Clase6/context/ThemeContext"
import CartContextProvider from "./Clase6/context/CartContext"
import Cart from "./Clase6/Cart"

function App () {
  return (
    <>
      {/* {visible ? <CicloDeVida /> : ""}
      <p><button className="btn-outline theme-primary" onClick={ocultarComponente}>Ocultar Componente</button></p> */}
      <CartContextProvider>
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
      </CartContextProvider>
      {/* <Layout colorFuente="white" colorFondo="red">
        <h1>Composición de Componentes</h1>
        <h3>Clase 6 de React JS</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum necessitatibus architecto tempore quam dolores excepturi. Recusandae eos molestiae sequi esse harum. Repellendus dignissimos tenetur, voluptates nulla facere molestiae aliquam?</p>
      </Layout> */}
      {/* <WithPosts /> */}
    </>
  )
}

export default App