import { AGREGAR_PRODUCTO, QUITAR_PRODUCTO, VACIAR_CARRITO } from "../Clase10/redux/CartTypes"

const ReduxMiddleware = store => next => action => {
    /* console.log(store);
    console.log(next);
    console.log(action); */

    if (action.type == AGREGAR_PRODUCTO) {
        console.info("Estás agrengando el Producto #" + action.payload + " al Carrito!");
    }

    if (action.type == QUITAR_PRODUCTO) {
        console.info("Estás eliminado el Producto #" + action.payload + " del Carrito!");
    }

    if (action.type == VACIAR_CARRITO) {
        console.warn("Vaciando el Carrito...");
    }

    next(action); // Ejecutar la acción (permite seguir adelante)
}

export default ReduxMiddleware