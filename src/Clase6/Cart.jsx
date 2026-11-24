import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { useDispatch, useSelector } from "react-redux"
import { QUITAR_PRODUCTO_ACTION, VACIAR_CARRITO_ACTION } from "../Clase10/redux/CartActions";

const Cart = () => {
    //const {cart, quitarProducto, vaciarCarrito, totalProductos, sumaProductos} = useContext(CartContext);
    const cart = useSelector(state => state.items);
    const totalProductos = useSelector(state => state.total);
    const sumaProductos = useSelector(state => state.suma);
    const dispatch = useDispatch();

    const quitarProducto = (id) => {
        dispatch(QUITAR_PRODUCTO_ACTION(id));
    }

    const vaciarCarrito = () => {
        dispatch(VACIAR_CARRITO_ACTION);
    }

    if (totalProductos == 0) {
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
                            <th scope="col" className="text-center">#</th>
                            <th scope="col" className="text-center">Nombre</th>
                            <th scope="col" className="text-center">Precio</th>
                            <th scope="col" className="text-end"><button className="boton" onClick={vaciarCarrito}>Vaciar</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle">{item.id}</td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle text-center">${item.precio}</td>
                                        <td className="text-end"><button className="boton" onClick={() => {quitarProducto(item.id)}}>Eliminar</button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2} className="text-center"><b>Total a Pagar</b></td>
                                <td className="text-center"><b>${sumaProductos}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart