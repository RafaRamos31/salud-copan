import { Button, Card, Col, Container, Row, Modal } from 'react-bootstrap'
import { useState } from "react"

export const Documento = ({archivo}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Container>
      <Row>
          <Col sm={0} md={4}>
          </Col>
          <Col>
            <Card>
              <Card.Header>{archivo.nombre}</Card.Header>
              <Card.Body className='d-flex justify-content-center'>
                <Button variant='info' onClick={handleShow}>
                  <i className="bi bi-eye-fill"></i>
                </Button>
                <Button variant='info' href={archivo.descargar} target='_blank'>
                  <i className="bi bi-download"></i>
                </Button>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col sm={6}>{archivo.tamano}</Col>
                  <Col sm={6}><i className="bi bi-arrow-down"></i> {archivo.totalDescargas}</Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
    </Container>
    <Modal size='lg' show={show} onHide={handleClose}>
      <iframe title={archivo.nombre} src={`https://drive.google.com/file/d/${archivo.fileId}/preview`} 
      width="auto" height="480" allow="autoplay"></iframe>
    </Modal>
    </>
  )
}
