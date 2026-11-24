import CursosJSON from "../../Clase4/cursos.json";
import { AGREGAR_PRODUCTO, QUITAR_PRODUCTO, VACIAR_CARRITO } from "./CartTypes";

const initialState = {
    items:[],
    total:0,
    suma:0
}

const CartReducer = (state = initialState, action) => {
    let producto;

    switch(action.type) {
        case AGREGAR_PRODUCTO: 
            producto = state.items.find(item => item.id == action.payload);

            if (producto) {
                console.warn("Ya existe el Producto #" + action.payload + " ingresado!");
            } else {
                producto = CursosJSON.find(item => item.id == action.payload);
                state.items.push(producto);
                console.log("Se agregó el Producto #" + action.payload);
            }

            return {
                ...state,
                items:[...state.items],
                total:state.items.length,
                suma:state.items.reduce((acum, item) => acum+=item.precio, 0)
            }
        case QUITAR_PRODUCTO:
            const carritoActualizado = state.items.filter(item => item.id != action.payload);
            console.log("Se eliminó el Producto #" + action.payload);

            return {
                ...state,
                items:carritoActualizado,
                total:carritoActualizado.length,
                suma:carritoActualizado.reduce((acum, item) => acum+=item.precio, 0)
            }
        case VACIAR_CARRITO:
            console.log("Se vació el Carrito!");

            return {
                ...initialState
            }
        default:
            return state;
    }
}

export default CartReducer