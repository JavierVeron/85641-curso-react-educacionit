import { use, useEffect, useState } from "react";
import Loading from "./Loading";

const APIFetch = () => {
    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const URL = "https://fakestoreapi.com/products/";

    const [mensaje, setMensaje] = useState("");
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");

    // API Fetch con then y catch
    /* useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            setLoaded(true);  
        })
    }, []) */

    // API Fetch con async y await
    useEffect(() => {
        (async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setPosts(data);
            setLoaded(true);
        })();
    }, [])

    const agregarProducto = () => {
        const producto = {title:nombre, price:precio};
        fetch(URL, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(producto)
        })
        .then(response => {
            if (response.status == 201) {
                setMensaje(<div className="alert theme-success my-5" role="alert">El producto se cargó correctamente!</div>);
                setNombre("");
                setPrecio("");
            } else {
                setMensaje(<div className="alert theme-danger my-5" role="alert">Error! El producto no se cargó correctamente!</div>)
            }
        })
    }

    return (
        <div className="container my-10">
            <div className="row">
                <div className="col-6">
                    <h1 className="fw-bold">API Fetch</h1>
                    {loaded ? <ul>
                        {
                            posts.map(item => (
                                <li key={item.id}><b>{item.title}</b> ${item.price}<br />{item.description}</li>
                            ))
                        }
                    </ul> : <Loading />}
                </div>
                <div className="col-6">
                    <h2 className="fw-bold">Agregar Producto</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input type="text" className="form-control" value={precio} onInput={(e) => {setPrecio(e.target.value)}} />
                        </div>
                        <button type="button" className="btn-solid theme-primary" onClick={agregarProducto}>Enviar</button>
                    </form>
                    {mensaje ? mensaje : ""}
                </div>
            </div>
        </div>
    )
}

export default APIFetch