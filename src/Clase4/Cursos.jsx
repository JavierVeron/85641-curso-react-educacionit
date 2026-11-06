import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import CursosJSON from "./cursos.json";
import { use, useEffect, useState } from "react";
import Curso from "./Curso";

const Cursos = () => {
    const [items, setItems] = useState(CursosJSON);
    const [searchParams, setSearchParams] = useSearchParams();    
    const nivel = searchParams.get("nivel");

    useEffect(() => {
        setItems(nivel ? CursosJSON.filter(item => item.nivel == nivel) : CursosJSON);
    }, [nivel])

    return (
        <div className="container my-10">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">Cursos</h1>
                    <div className="row">
                        {
                            items.map(item => (
                                <Card key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursos