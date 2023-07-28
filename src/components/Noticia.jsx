import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { getDateString } from "../services/stringFormatter";
import { Departamento } from "./Departamento";
import { ContainerMultimedia } from "./multimedia/ContainerMultimedia";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { eliminarNoticia } from "../services/noticias-service";

export const Noticia = ({noticia}) => {
  const {valid} = useContext(UserContext)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await eliminarNoticia(noticia._id)
    window.location.reload();
  }

  return (
    <>
    <Card className="mb-4 mr-3 noticia">
      <Card.Header className="encabezado">
        <Row>
          <Col sm={8}>
            <Departamento key={noticia._id} nombre={noticia.departamento.nombre} urlLogo={noticia.departamento.urlLogo}/>
          </Col>
          <Col sm={4}>
            <p className="fecha">{getDateString(noticia.fechaPublicacion)}</p>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <p>
          {noticia.contenido}
        </p>
        <div className="container-multimedia d-flex justify-content-around">
        {
          noticia.archivos.length > 1 && noticia.archivos.every((archivo) => archivo.tipo === "Imagen") 
          ? <div> Galeria </div>
          : noticia.archivos.map((archivo, i) => (
            <ContainerMultimedia key={i} archivo={archivo}/>
          )) 
        }
        </div>
      </Card.Body>
      {
        valid && 
        <Card.Footer>
          <Button variant="warning"><i className="bi bi-tools "></i>{' '}Modificar</Button>
          <Button variant="danger" className="mx-3" onClick={handleShow}><i className="bi bi-tools"></i>{' '}Eliminar</Button>
        </Card.Footer>
      }
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Noticia</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Desea eliminar esta noticia y los archivos incluidos en la misma? Esta accion no puede revertirse.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="px-3" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="danger" className="px-3" onClick={handleDelete}>
            Eliminar noticia
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
