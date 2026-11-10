import { createContext, useState } from "react";
import CursosJSON from "../../Clase4/cursos.json";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const agregarProducto = (id) => {
        const producto = CursosJSON.find(item => item.id == id);
        setCart([...cart, producto]);
        console.log("Se agregó el Producto #" + id);
    }

    const quitarProducto = (id) => {
        const productos = cart.filter(item => item.id != id);
        setCart(productos);
        console.log("Se eliminó el Producto #" + id);
    }

    const vaciarCarrito = () => {
        setCart([]);
        console.log("Se vació el Carrito!");
    }

    return (
        <CartContext.Provider value={{cart, agregarProducto, quitarProducto, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider