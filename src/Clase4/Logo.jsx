import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to={"/"}>
            <img src="/images/educacion-it-logo.svg" alt="Educación IT" width={180} />
        </Link>
    )
}

export default Logo