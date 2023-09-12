import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import { Layout } from "./Layout.jsx";
import banner from "../assets/images/bannerOficios.jpg"
import '../assets/styles/contacto.css'
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext.js";
import { PublicarOficio } from "./PublicarOficio.jsx";
import { BarraFiltrosOficios } from "../components/BarraFiltrosOficios.jsx";

export const Oficios = () => {
  const {valid} = useContext(UserContext);

  //Modal publicar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout pagina={"Oficios"}>
      <Image src={banner}
      className="animate__animated animate__fadeIn w-100" style={{maxHeight: '300px', objectFit: 'cover'}} fluid/>
      <h1 className="titulo-contacto">OFICIOS</h1>
      {
        valid ?  
        <Button className="mx-3 my-3" variant="warning" onClick={handleShow}>
          <i className="bi bi-tools"></i>{' '}Publicar
        </Button>
        : ''
      }
      <Row>
        <Col sm={3}>
          <BarraFiltrosOficios/>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <PublicarOficio handleClose={handleClose}/>
      </Modal>          
    </Layout>
  );
};

