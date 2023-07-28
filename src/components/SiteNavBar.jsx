import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import logo from "../assets/images/logo-salud.png";
import { Link } from "react-router-dom";
import { Login } from "../views/Login";
import { useContext, useState, useEffect } from "react";
import { logout } from "../services/login-service";
import data from "../data/info-pagina.json"
import { UserContext } from "../contexts/UserContext";

export const SiteNavBar = () => {
  const [actual, setActual] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {valid} = useContext(UserContext);

  useEffect(() => {
    const dirs = window.location.href.split('/')[3]
    setActual(dirs)
  }, [])
  
  return (
    <>
    <Navbar expand="lg"  className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="50"
            height="40"
            className="d-inline-block align-top"
          />
          <label className="mt-1 mx-1" style={{cursor: 'pointer'}}>
          {' ' + data.departamento}
          </label>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'var(--mp-azul-4)'}}>Menú</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" className="ml-auto">
            <Link to={'/'} className={`nav-link ${actual === '' ? 'active' : ''}`}><i className="bi bi-house-fill"></i>{' '}Inicio</Link>
            <Link to={'/noticias'} className={`nav-link ${actual === 'noticias' ? 'active' : ''}`}><i className="bi bi-newspaper"></i>{' '}Publicaciones</Link>
            <Link to={'/recursos'} className={`nav-link ${actual === 'recursos' ? 'active' : ''}`}><i className="bi bi-archive-fill"></i>{' '}Recursos</Link>
            {/*<Link to={'/sitios'} className="nav-link">Sitios de Interés</Link>*/}
            <Link to={'/oficios'} className={`nav-link ${actual === 'oficios' ? 'active' : ''}`}><i className="bi bi-file-medical"></i>{' '}Oficios</Link>
            <Link to={'/gestores'} className={`nav-link ${actual === 'gestores' ? 'active' : ''}`}><i className="bi bi-people-fill"></i>{' '}Gestores</Link>
            <Link to={'/contacto'} className={`nav-link ${actual === 'contacto' ? 'active' : ''}`}><i className="bi bi-telephone-fill"></i>{' '}Contacto</Link>
            {
              valid ? 
              <Button variant="danger" onClick={logout}><i className="bi bi-door-open-fill"></i>{' '}Cerrar Sesión</Button>
              : <Button variant="warning" onClick={handleShow}><i className="bi bi-door-open-fill"></i>{' '}Gestión</Button>
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
