import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const Cart = () => {
    const {cart, quitarProducto, vaciarCarrito} = useContext(CartContext);

    if (cart.length == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="alert theme-warning" role="alert">
                            <p>No se encontraron Productos!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-end" colSpan={4}><button className="boton" onClick={vaciarCarrito}>Vaciar</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nombre}</td>
                                        <td>${item.precio}</td>
                                        <td className="text-end"><button className="boton" onClick={() => {quitarProducto(item.id)}}>Eliminar</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart