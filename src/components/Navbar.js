import logo from "../images/potteri.png"

function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="logo" className="nav-img"/>
        </nav>
    )
}

export default Navbar