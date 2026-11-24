import { useState } from "react";
import { createStore } from "redux";

const tasks = [
    {id:1, nombre:"Desayunar", completada:true, importante:"SI"},
    {id:2, nombre:"Ir a Trabajar", completada:true, importante:"SI"},
    {id:3, nombre:"Almorzar", completada:true, importante:"SI"},
    {id:4, nombre:"Merendar", completada:true, importante:"NO"},
    {id:5, nombre:"Ir a Correr", completada:false, importante:"NO"},
    {id:6, nombre:"Cenar", completada:false, importante:"SI"},
    {id:7, nombre:"Mirar Netflix", completada:false, importante:"NO"}
];

// Reducer
const tareasReducer = (state = tasks, action) => {
    switch(action.type) {
        case "SHOW_ALL":
            return {...state, filtered:tasks};
        case "SHOW_COMPLETE":
            return {...state, filtered:tasks.filter(item => item.completada)};
        case "SHOW_NO_COMPLETE":
            return {...state, filtered:tasks.filter(item => !item.completada)};
        case "FILTER_TASKS":
            return {...state, filtered:tasks.filter(item => item.importante == action.payload)};
        default:
            return {filtered:state};
    }
}

const store = createStore(tareasReducer);

const Tareas = () => {
    const [tasks, setTasks] = useState(store.getState());

    const showAllTasks = () => {
        store.dispatch({type:"SHOW_ALL"});
    }

    const showCompleteTasks = () => {
        store.dispatch({type:"SHOW_COMPLETE"});
    }

    const showNoCompleteTasks = () => {
        store.dispatch({type:"SHOW_NO_COMPLETE"});
    }

    const showImportantTasks = () => {
        store.dispatch({type:"FILTER_TASKS", payload:"SI"})
    }

    const showNoImportantTasks = () => {
        store.dispatch({type:"FILTER_TASKS", payload:"NO"})
    }

    store.subscribe(() => {
        setTasks(store.getState());        
    })

    return (
        <div className="container my-10">
            <div className="row">
                <div className="col-6">
                    <h1 className="fw-bold">Tareas (Redux)</h1>
                    <div className="btn-group mb-5" role="group">
                        <button type="button" className="btn-solid theme-primary" onClick={showAllTasks}>Todas</button>
                        <button type="button" className="btn-solid theme-primary" onClick={showCompleteTasks}>Completadas</button>
                        <button type="button" className="btn-solid theme-primary" onClick={showNoCompleteTasks}>No Completadas</button>
                        <button type="button" className="btn-solid theme-primary" onClick={showImportantTasks}>Importantes</button>
                        <button type="button" className="btn-solid theme-primary" onClick={showNoImportantTasks}>No Importantes</button>
                    </div>
                    <ul className="list-group">
                        {
                            tasks.filtered.map(item => (
                                <li className="list-group-item" key={item.id}>{item.nombre}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tareas