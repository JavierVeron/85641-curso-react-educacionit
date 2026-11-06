import { Link, Navigate } from "react-router-dom"

const Corporate = ({logueado}) => {
    return (
        <div className="container my-10">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">Corporate</h1>
                    <h3>Impulsa el talento de tu empresa en la era de la IA</h3>
                    <p className="mt-10"><Link to={"/"} className="boton">Ir a la Página Principal</Link></p>
                    {!logueado && <Navigate to={"/"} />}
                </div>
            </div>
        </div>
    )
}

export default Corporate