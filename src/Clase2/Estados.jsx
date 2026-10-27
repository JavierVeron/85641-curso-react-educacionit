import { useState } from "react"
import Layout from "./Layout";

const Estados = () => {
    const [nombre, setNombre] = useState("Cristian");
    const [email, setEmail] = useState("cristian.dorna@gmail.com");
    const [invertirColor, setInvertirColor] = useState(true);
    let edad = 30;
    edad = 31;

    const modificarDatos = () => {
        setNombre("Gustavo");
        setEmail("gustavo.russo@hotmail.com");
        edad = 40;
        console.log(edad);   
    }

    const fnInvertirColor = () => {
        setInvertirColor(invertirColor ? false : true);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">Estados (states)</h1>
                    <p><button className="btn-solid theme-primary" onClick={modificarDatos}>Modificar</button></p>
                    <Layout info={invertirColor}>
                        <p>Mi nombre es <b>{nombre}</b></p>
                        <p>Mi email es <b>{email}</b></p>
                        <p>Mi edad es <b>{edad}</b></p>
                    </Layout>
                    <p className="py-3">Invertir Color <button className="btn-outline theme-primary" onClick={fnInvertirColor}>Invertir</button></p>
                </div>
            </div>
        </div>
    )
}

export default Estados