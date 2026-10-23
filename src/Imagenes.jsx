import hamburguesa2 from "./assets/hamburguesa-con-queso.png";

const Imagenes = () => {
    const hamburguesa3 = "https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar";

    return (
        <div>
            <img src="/images/hamburguesa.png" alt="Imagen #1" width={200} />
            <img src={hamburguesa2} alt="Imagen #2" width={200} />
            <img src={hamburguesa3} alt="Imagen #3" width={200} />
            <img src="https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar" alt="Imagen #4" width={200} />
        </div>
    )
}

export default Imagenes