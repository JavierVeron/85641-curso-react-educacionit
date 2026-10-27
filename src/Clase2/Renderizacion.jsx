const Login = () => {
    return (
        <button className="btn-solid theme-primary">INGRESAR</button>
    )
}

const Logout = () => {
    return (
        <button className="btn-solid theme-danger">SALIR</button>
    )
}


const Renderizacion = () => {
    const curso = {id:1, nombre:"JavaScript", precio:70000};
    const curso2 = {id:2, nombre: "Curso de React JS", precio:110000};
    let presupuesto = 180000;
    let a = 10;
    let b = 20;
    const isLogging = false;
    const bebidas = ["Coca Cola", "Pepsi", "Coca Cola Zero", "Pepsi Black", "Coca Cola"]; //array de strings
    const bebidas2 = [
        {id:1, nombre:"Coca Cola", precio:5000},
        {id:2, nombre:"Pepsi", precio:4900},
        {id:3, nombre:"Coca Cola Zero", precio:4800},
        {id:4, nombre:"Pepsi Black", precio:4700},
        {id:5, nombre:"Coca Cola 3Lts", precio:5100}
    ]; // arrayt de objetos

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="fw-bold">Renderización</h1>
                        <p>Curso de {curso.nombre}</p>
                        <p>{curso2.nombre}</p>
                        {presupuesto > curso2.precio ? <p>De acuerdo a tu Presupuesto, podes hacer el Curso de <b>{curso2.nombre}</b></p> : <p>De acuerdo a tu Presupuesto, podes hacer el Curso de <b>${curso.nombre}</b></p>}
                        <p>De acuerdo a tu Presupuesto, podes hacer el Curso de <b>{presupuesto > curso2.precio ? curso2.nombre : curso.nombre}</b></p>
                        {isLogging ? <Logout /> : <Login />}
                        {isLogging ? <button className="btn-solid theme-danger">Logout</button> : <button className="btn-solid theme-primary">Login</button>}
                        <ul>
                            <li>Té</li>
                            <li>Café</li>
                            <li>Mate</li>
                        </ul>

                        <ul>
                            {
                                bebidas.map((item, id) => (
                                    <li key={id}>{item}</li>
                                ))
                            }
                        </ul>

                        <ul>
                            {
                                bebidas2.map(item => (
                                    <li key={item.id}>{item.nombre} ${item.precio} pesos</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Renderizacion