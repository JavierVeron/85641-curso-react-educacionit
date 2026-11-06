import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to={"/cursos"}>Cursos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/empleos"}>Empleos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/corporate"}>Corporate Trainning</Link>
            </li>
        </ul>
    )
}

export default NavBar