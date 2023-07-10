import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import logo from "../resources/logo.png";
import { Link } from "react-router-dom";
import { Login } from "../views/Login";
import { useState } from "react";
import { logout } from "../services/login-service";

export const SiteNavBar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const valid = localStorage.getItem("user-id");


  return (
    <>
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
            {
              valid ? 
              <Button variant="danger" onClick={logout}><i className="bi bi-door-open-fill"></i>Cerrar Sesión</Button>
              : <Button variant="warning" onClick={handleShow}><i className="bi bi-door-open-fill"></i>Gestión</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Login />
    </Modal>
    </>
  );
};
