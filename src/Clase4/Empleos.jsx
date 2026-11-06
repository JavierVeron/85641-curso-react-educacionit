import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

const Empleos = ({logueado}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!logueado) {
            navigate("/", {replace:true})
        }
    }, [logueado])

    return (
        <div className="container my-10">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">Empleos IT</h1>
                    <h3> 2095 búsquedas laborales activas</h3>
                    <p className="mt-10"><Link to={"/"} className="boton">Ir a la Página Principal</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Empleos