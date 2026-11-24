import { useState } from "react";
import {createStore} from "redux";

// Crear un Reducer
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENTAR":
            return state + 1;
        case "DECREMENTAR":
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counterReducer);

const Contador = () => {
    const [valor, setValor] = useState(0);

    const incrementar = () => {
        store.dispatch({type:"INCREMENTAR"});
    }

    const decrementar = () => {
        store.dispatch({type:"DECREMENTAR"});
    }

    store.subscribe(() => {
        console.log(store.getState());
        setValor(store.getState());
    })

    return (
        <div className="container my-10">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">Contador (Redux)</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn-solid theme-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn-solid theme-primary">{valor}</button>
                        <button type="button" className="btn-solid theme-primary" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contador