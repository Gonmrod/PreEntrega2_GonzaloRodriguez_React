import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

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
              <NavDropdown.Item>
                <NavLink to={`/category/vinos`} className="Option" activeClassName="ActiveOption">Vinos</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={`/category/Tabaco`} className="Option" activeClassName="ActiveOption">Tabaco</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={`/category/Regionales`} className="Option" activeClassName="ActiveOption">Regionales</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
