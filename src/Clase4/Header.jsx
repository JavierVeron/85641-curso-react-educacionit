import Logo from "./Logo"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <div className="container my-10">
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