import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../resources/logo.png";
import { Link } from "react-router-dom";

export const SiteNavBar = () => {
  return (
    <Navbar expand="lg"  className="bg-body-tertiary " sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Copán
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" className="ml-auto">
            <Link to={'/noticias'} className="nav-link">Noticias</Link>
            <Link to={'/contacto'} className="nav-link">Contacto</Link>
            <Link to={'/recursos'} className="nav-link">Recursos</Link>
            <Link to={'/sitios'} className="nav-link">Sitios de Interés</Link>
            <Button variant="warning"><i className="bi bi-door-open-fill"></i><Link to={'/login'} className="nav-item">Gestión</Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
