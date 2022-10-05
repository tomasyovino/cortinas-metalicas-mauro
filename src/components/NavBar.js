import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png";

const NavBar = () => {
  return (
    <Navbar expand="lg" id="navbar">
      <Container className="navbar-container">
        <Container className="navbar-brand-container">
          <Navbar.Brand href="#home" className="logo">
            <img src={logo} alt="logo" style={{width: "100px", height: "auto"}} />
            <div>
              <h3>CORTINAS METALICAS</h3>
              <h3>MAURO</h3>
            </div>
          </Navbar.Brand>
        </Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">INICIO</Nav.Link>
          <Nav.Link href="#about">SOBRE NOSOTROS</Nav.Link>
          <Nav.Link href="#contact">CONTACTO</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar