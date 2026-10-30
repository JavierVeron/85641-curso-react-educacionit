const Card = ({item}) => {
    return (
        <div className="col-4">
            <div className="card border-0" >
                <div className="card-body border-0">
                    <img src={item.imagen} className="border-0" alt={item.nombre} />
                    <h3 className="mt-2 mb-0">{item.nombre}</h3>
                    <p className="card-text fg-2">{item.descripcion}</p>
                    <p className="card-text fg-2"><b>${item.precio}</b></p>
                    <button className="btn-solid theme-warning fw-bold border border-1 border-secondary">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Card