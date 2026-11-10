import { useParams } from "react-router-dom";
import CursosJSON from "./cursos.json";
import { useContext, useEffect, useState } from "react";
import Certifica from "./Certifica";
import { CartContext } from "../Clase6/context/CartContext";

const Curso = () => {
    const {agregarProducto} = useContext(CartContext);
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            const curso = CursosJSON.find(item => item.slug == id);            
            setItem(curso);
        }
    }, [])

    return (
        <>
            <div className="container-fluid my-10 py-10" style={{backgroundColor:"#15163d"}}>
                <div className="container fg-white">
                    <div className="row">
                        <div className="col-10">
                            <h1 className="fw-bold">{item.nombre}</h1>
                            <p>{item.descripcion}</p>
                        </div>
                        <div className="col-2 fs-sm">
                            <p>Duración: <b>{item.duracion}</b><br />
                            Clases: <b>{item.clases} online de 2h</b><br />
                            Nivel: <b>{item.nivel}</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <Certifica />
            <div className="container my-10">
                <div className="row">
                    <div className="col text-center">
                        <button className="boton" onClick={() => {agregarProducto(item.id)}}>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Curso