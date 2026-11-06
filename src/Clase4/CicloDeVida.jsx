import { useEffect, useState } from "react"

const CicloDeVida = () => {
    const [contador1, setContador1] = useState(1);
    const [contador2, setContador2] = useState(1);
    const [habilitado, setHabilitado] = useState(true);
    const LIMITE = 3;
    
    const incrementarContador1 = () => {
        setContador1(contador1 + 1);
    }

    const incrementarContador2 = () => {
        setContador2(contador2 + 1);
    }

    // Opción #1 - Con dependencias vacías [] (Se ejecuta 1 sola vez en el montaje del componente) 
    useEffect(() => {
        console.log("#2 - Actualización del Componente");

        return (() => {
            console.log("#3 - Desmontaje del Componente!");
        })
    }, [])

    // Opción #2 - Con dependencias dentro del [] (Se ejecuta cada vez que se actualiza el componente) 
    /* useEffect(() => {
        console.log("#2 - Actualización del Componente");
        console.log("Se actualizó el state del Contador #1 o #2");
    }, [contador1, contador2]) */

    // Opción #3 - Sin dependencias, no hay [] (Está atento a cualquier actualización de cualquier prop o estado) 
    useEffect(() => {
        console.log("Se actualizó el state del Contador #1 o #2");

        if (contador1 == LIMITE) {
            setHabilitado(false);
        }

        if (contador2 == LIMITE) {
            setHabilitado(false);
        }
    })

    console.log("#1 - Montaje del Componente");

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">Ciclo de Vida (useEffect)</h1>
                    <p>Contador #1: <b>{contador1}</b></p>
                    <p><button className="btn-solid theme-primary" onClick={incrementarContador1} disabled={habilitado ? false : true}>Aumentar #1</button></p>
                    <p>Contador #2: <b>{contador2}</b></p>
                    <p><button className="btn-solid theme-primary" onClick={incrementarContador2} disabled={habilitado ? false : true}>Aumentar #2</button></p>
                </div>
            </div>
        </div>
    )
}

export default CicloDeVida