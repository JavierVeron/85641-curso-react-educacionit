// Opción #1 => Props como objeto
/* const Propiedades = (props) => {
    console.log(props);
    //props.precio = 120000; // Esto no funciona, no se puede agregar una propiedad a una prop como si fuera un objeto nativo de JS

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">Propiedades (props)</h1>
                    <p>Curso de <b>{props.curso}</b>, su valor es $<b>{props.precio}</b></p>
                </div>
            </div>
        </div>
    )
} */

import Layout from "./Layout"

// Opción #2 => Desestructurando Props
const Propiedades = ({curso, precio}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">Propiedades (props)</h1>
                    <p>Curso de <b>{curso.toUpperCase()}</b>, su valor es $<b>{precio * 2}</b></p>
                    <Layout info={true}>
                        <h2>Curso de Javascript desde cero</h2>
                        <p>Aprende a programar con el lenguaje más utilizado en internet para el desarrollo frontend de sitios web.</p>
                        <p>Hasta 6 cuotas sin interes de <b>$ 20.440</b><br />Precio final: <b>$ 122.640</b></p>
                    </Layout>
                    <Layout info={false}>
                        <h2>Curso de React JS</h2>
                        <p>Domina la librería JavaScript más demandada en la industria para el desarrollo front end y construye un proyecto con las mejores prácticas del mercado laboral.</p>
                    </Layout>
                </div>
            </div>
        </div>
    )
}

export default Propiedades