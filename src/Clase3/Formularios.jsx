import { useState } from "react"

const Formularios = () => {
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [emailError, setEmailError] = useState("");
    const [contrasenaError, setContrasenaError] = useState("");

    // Opción #1 => Boton tipo "button" y evento onClick
    /* const validarFormulario = () => {
        if (email == "") {
            setEmailError("Error! Debe completar el campo Email!");
            return false;
        } else {
            setEmailError("");
        }

        if (contrasena == "") {
            setContrasenaError("Error! Debe completar el campo Contraseña!");
            return false;
        } else {
            setContrasenaError("");
        }

        console.info("Envío de Email!");
    } */

    // Opción #2 => Botón tipo "submit" y evento onClick (agregar el evento con el método preventDefault();)
    const validarFormulario = (event) => {
        event.preventDefault(); // Detener el envio del formulario

        if (email == "") {
            setEmailError("Error! Debe completar el campo Email!");
            return false;
        } else {
            setEmailError("");
        }

        if (contrasena == "") {
            setContrasenaError("Error! Debe completar el campo Contraseña!");
            return false;
        } else {
            setContrasenaError("");
        }

        console.info("Envío de Email!");
    }

    // Opción #3 => Botón tipo "submit" y evento onSubmit (desde el Formulario) (agregar el evento con el método preventDefault();)
    // Misma función con método preventDefault()

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-4">
                    <h1 className="fw-bold">Formularios</h1>
                    <form onSubmit={validarFormulario}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onInput={(e) => {setEmail(e.target.value)}} />
                            <div className="form-text text fg-danger">{emailError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" value={contrasena} onInput={(e) => {setContrasena(e.target.value)}} />
                            <div className="form-text fg-danger">{contrasenaError}</div>
                        </div>
                        <button type="submit" className="btn-solid theme-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formularios