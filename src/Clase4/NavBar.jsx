import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../Clase6/context/ThemeContext"
import { CartContext } from "../Clase6/context/CartContext";

const NavBar = () => {
    const {darkMode, toggleDarkMode} = useContext(ThemeContext);
    const {cart} = useContext(CartContext);

    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className={`nav-link ${darkMode && "fg-white"}`} to={"/cursos"}>Cursos</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${darkMode && "fg-white"}`} to={"/empleos"}>Empleos</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${darkMode && "fg-white"}`} to={"/corporate"}>Corporate Trainning</Link>
            </li>
            <li className="d-flex align-items-center">
                <div className="switch">
                    <input type="checkbox" role="switch" checked={darkMode} onChange={toggleDarkMode} />
                </div>
            </li>
            <li className="d-flex align-items-center">
                <Link to={"/carrito"} className="text-decoration-none">
                    <i className="bi bi-cart ps-10"></i> ({cart.length})
                </Link>
            </li>
        </ul>
    )
}

export default NavBar