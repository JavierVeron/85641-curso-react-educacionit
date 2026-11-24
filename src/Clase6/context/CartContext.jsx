import { createContext, useState } from "react";
import CursosJSON from "../../Clase4/cursos.json";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const agregarProducto = (id) => {
        let producto = cart.find(item => item.id == id);

        if (producto) {
            console.warn("Ya existe el Producto #" + id + " ingresado!");
        } else {
            producto = CursosJSON.find(item => item.id == id);
            setCart([...cart, producto]);
            console.log("Se agregó el Producto #" + id);
        }
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

    const totalProductos = () => {
        return cart.length;
    }

    const sumaProductos = () => {
        let total = 0;

        cart.forEach(item => {
            total += item.precio;
        })

        return total;
    }

    return (
        <CartContext.Provider value={{cart, agregarProducto, quitarProducto, vaciarCarrito, totalProductos, sumaProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider