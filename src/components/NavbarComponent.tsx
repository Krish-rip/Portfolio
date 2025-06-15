import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/main.css";

const NavbarComponent = () => {

    const navbarIcon = require("../assets/images/code-icon.webp")

    return (
        <Navbar className="navbar" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={navbarIcon}
                        height="30"
                        className="d-inline-block align-top"
                    />
                    <span id='navbar-brand-name-1'><strong> Krish</strong></span><span id='navbar-brand-name'><strong>  Gangar</strong></span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;