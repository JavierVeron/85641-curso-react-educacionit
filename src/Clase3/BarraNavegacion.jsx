import { useState } from "react"

const BarraNavegacion = ({login, usuario, setLogin}) => {
    const ingresar = () => { 
        setLogin(true);
    }

    const salir = () => {
        setLogin(false);
    }

    return (
        <nav className="navbar sm:navbar-expand bg-1 fg-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Educación IT</a>
                <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" aria-hidden="true"></span>
                </button>
                <dialog className="drawer drawer-end" id="navbarNav" aria-labelledby="navbarNavLabel">
                <div className="drawer-header">
                    <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                </div>
                <div className="drawer-body">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cursos</a>
                        </li>
                        <li className="nav-item">
                            <div>
                                {/* {login ? <span>Hola, <b>{usuario}</b></span> : ""} */}
                                {login && <span>Hola, <b>{usuario}</b></span>}
                                <button className={`btn-solid ${login ? "theme-danger" : "theme-primary"}`} onClick={login ? salir : ingresar}>{login ? "Salir" : "Entrar"}</button>
                            </div>
                        </li>
                    </ul>
                </div>
                </dialog>
            </div>
        </nav>
    )
}

export default BarraNavegacion