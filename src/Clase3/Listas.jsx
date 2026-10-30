import Card from "./Card";

const Listas = () => {
    const productos = ["Café", "Té", "Mate", "Mate"];
    const productos2 = [
        {id:1, nombre:"Hamburguesa", descripcion:"El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada.", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar", precio:8000},
        {id:2, nombre:"Hamburguesa con Queso", descripcion:"Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar", precio:9000},
        {id:3, nombre:"McFiesta", descripcion:"Hamburguesa elaborada con carne 100% de carne vacuna, mayonesa, lechuga, tomate.", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar", precio:9000}
    ];

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold">Lista Simple</h2>
                    <ul>
                        {
                            productos.map((item, indice) => (
                                <li key={indice}>{item}</li>
                            ))
                        }
                    </ul>
                    <h2 className="fw-bold">Lista con Objetos</h2>
                    <div className="row">
                        {
                            productos2.map(item => (
                                <Card key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listas