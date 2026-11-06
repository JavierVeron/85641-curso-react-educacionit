import { Link } from "react-router-dom"

const Card = ({item}) => {
    return (
        <div className="col-3">
            <Link to={"/curso/" + item.slug} className="text-decoration-none">
                <div className="card ">
                    <div className="card-body">
                        <h4 className="card-title fw-bold">{item.nombre}</h4>
                        <p className="card-subtitle fg-3">{item.descripcion.substring(0, 70)}...</p>
                        <hr />
                        <p><b className="text-decoration-line-through">${item.precio}</b> ${item.precioDescuento}<br />
                        Hasta 6 cuotas sin interés de <b>${(item.precioDescuento/6).toFixed(2)}</b><br />
                        Duración: <b>{item.duracion}</b></p>
                        <hr />
                        <p>Nivel: <b>{item.nivel}</b></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card