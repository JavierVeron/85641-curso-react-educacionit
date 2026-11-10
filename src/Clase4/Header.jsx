import { useContext } from "react"
import Logo from "./Logo"
import NavBar from "./NavBar"
import { ThemeContext } from "../Clase6/context/ThemeContext"

const Header = () => {
    const {darkMode} = useContext(ThemeContext);

    return (
        <div className={`container my-10 p-5 ${darkMode && "bg-black"}`}>
            <div className="row">
                <div className="col-2">
                    <Logo />
                </div>
                <div className="col-10 align-middle">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}

export default Header