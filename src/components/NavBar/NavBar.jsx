import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">RetroZone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Historia</Nav.Link>
              <Nav.Link href="#pricing">Nosotros</Nav.Link>
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Indumentaria</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Calzados</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
            );
          }
export default NavBar;
