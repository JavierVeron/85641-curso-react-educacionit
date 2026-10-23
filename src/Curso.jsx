import './Curso.css';

const Curso = () => {
    let nombre = "Desarrollo Web";
    nombre = "JavaScript";
    nombre = "React JS";
    let descripcion = "Domina la librería JavaScript más demandada en la industria para el desarrollo front end y construye un proyecto con las mejores prácticas del mercado laboral.";
    const producto = {id:1, nombre:"Coca Cola", precio:5000}; // Esto es un objeto
    const estilo = {color:"white", backgroundColor:"grey", fontSize:"18px", padding:"10px"}

    return (
        <>
            <h3 style={estilo}>Curso de {nombre.toUpperCase()}</h3>
            <p style={{color:"red", backgroundColor:"black", fontSize:"14px"}}>{descripcion}</p>
            <p className='promedio'>Promedio 20 personas por curso</p>
        </>
    )
}

export default Curso