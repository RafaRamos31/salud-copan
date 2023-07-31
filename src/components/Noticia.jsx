import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { getDateString } from "../services/stringFormatter";
import { Departamento } from "./Departamento";
import { ContainerMultimedia } from "./multimedia/ContainerMultimedia";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { eliminarNoticia } from "../services/noticias-service";
import { ToastContext } from "../contexts/ToastContext";

export const Noticia = ({noticia}) => {
  //Contexts
  const {valid} = useContext(UserContext)
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Visibilidad del componente
  const [visible, setVisible] = useState(true);

  //Modal Eliminar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Eliminar noticia
  const [correct, setCorrect] = useState(null);

  const handleDelete = async () => {
    const result = await eliminarNoticia(noticia._id)
    setCorrect(result)
    setVisible(false)
  }

  useEffect(() => {
    if(correct === true){
      actualizarTitulo('Publicación Eliminada')
      setContent('Se ha eliminado con exito la publicación seleccionada.')
      setVariant('info')
      setShowToast(true)
    }
    if(correct === false){
      actualizarTitulo('Error al Eliminar Publicación')
      setContent('Ocurrió un error al tratar de eliminar la publicación, intente de nuevo.')
      setVariant('danger')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])


  if(!visible){
    return null
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
          <Modal.Title>Eliminar Publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Desea eliminar esta publicación y los archivos incluidos en la misma? Esta acción no puede revertirse.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="px-3" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="danger" className="px-3" onClick={handleDelete}>
            Eliminar Publicación
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
