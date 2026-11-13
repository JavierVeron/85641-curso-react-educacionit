const Promesas = () => {
    // LAS PROMESAS TIENEN 3 ESTADOS
    // PENDING (PENDIENTE => ESTADO POR DEFECTO)
    // FULLFILLED (COMPLETADA)
    // REJECTED (RECHAZADA)
    const promesa = () => {
        return new Promise((resolve, rejected) => {
            console.log("hola");
            //resolve("Nos juntamos el sábado para el asado!");
            rejected("No, no puedo porque mi señora no quiere que me junte con Ustedes!");
        })
    }

    const descuento = (cupon) => {
        return new Promise((res, rej) => {
            if (cupon == "PROMO10") {
                res("FELICITACIONES! TENES UN 10% DE DESCUENTO!")
            } else {
                rej("Cupón inválido!")
            }
        })
    }

    //console.log(promesa());
    //console.log(descuento("hola"));
    descuento("PROMO10")
    .then(valor => {
        console.log(valor);
    })
    .catch(error => {
        console.log(error);
    })

    return (
        <div className="container my-10">
            <div className="row">
                <div className="col-6">
                    <h1 className="fw-bold">Promesas Fetch</h1>
                </div>
            </div>
        </div>
    )
}

export default Promesas