import { useState } from "react"
import BarraNavegacion from "./BarraNavegacion"

const Welcome = ({usuario}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold">Bienvenido, {usuario}!</h2>
                </div>
            </div>
        </div>
    )
}

const ContenidoLogin = ({login, usuario, setLogin}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <BarraNavegacion login={login} usuario={usuario} setLogin={setLogin} />
                    <h1>Renderizado Condicional</h1>
                </div>
            </div>
        </div>
    )
}

const ContenidoNotLogin = ({fn}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col fg-white bg-black p-5">
                    <h2 className="fw-bold">Debes inicar sesión!</h2>
                    <button className="btn-solid theme-primary" onClick={fn}>Ingresar</button>
                </div>
            </div>
        </div>
    )
}

const Renderizado = () => {
    const [login, setLogin] = useState(false);
    const [usuario, setUsuario] = useState("Juan");

    const ingresar = () => {
        setLogin(true);
    }

    /* if (login) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <BarraNavegacion login={login} usuario={usuario} setLogin={setLogin} />
                        <h1>Renderizado Condicional</h1>
                    </div>
                </div>
            </div>
        ) 
    }

    return (
        <MustLogin fn={ingresar} />
    ) */

    return (
        <>
            {login ? <ContenidoLogin login={login} usuario={usuario} setLogin={setLogin} /> : <ContenidoNotLogin fn={ingresar} />}
        </>
    )
}

export default Renderizado