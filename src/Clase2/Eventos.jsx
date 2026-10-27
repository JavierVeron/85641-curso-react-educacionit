import { use, useState } from "react"

const Eventos = () => {
    const [visible, setVisible] = useState(false);
    const [mostrar, setMostrar] = useState(false);
    const [texto, setTexto] = useState("");
    const [pais, setPais] = useState("");

    const mostrarCartel = () => {
        setVisible(true);
    }

    const mostrarInfo = () => {
        setMostrar(true);
    }

    const ocultarInfo = () => {
        setMostrar(false);
    }

    const cambiarTexto = (e) => {
        setTexto(e.target.value);
    }

    const paises = ["Argentina", "Uruguay", "Chile"];

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">Eventos</h1>
                    <p><button className="btn-solid theme-primary" onClick={mostrarCartel} onMouseOver={mostrarInfo} onMouseOut={() => {setMostrar(false)}}>Mostrar</button></p>
                    {visible ? <div className="alert theme-success" role="alert">Bienvenidos al <b>Curso de JS</b> en <b>Educación IT</b></div> : ""}
                    {mostrar ? <div className="alert theme-primary" role="alert">Si mostras el Curso tenes un <b>20% de Descuento!</b></div> : ""}
                    <div className="form-field">
                        <label htmlFor="fieldText" className="form-label">Ingrese un Texto</label>
                        <input type="email" className="form-control" value={texto} onInput={(e) => {setTexto(e.target.value)}} placeholder="Texto..." />
                        <div className="form-text">{texto}</div>
                    </div>
                    <select name="" id="" className="form-control" onClick={(e) => {setPais(e.target.value)}} onChange={(e) => {setPais(e.target.value)}} >
                        {/* <option value="">Seleccione una Opción</option> */}
                        {
                            paises.map((item, id) => (
                                <option value={item} key={id}>{item}</option>
                            ))
                        }
                    </select>
                    {pais ? <p>País seleccionado: <b>{pais}</b></p> : ""}
                </div>
            </div>
        </div>
    )
}

export default Eventos