import { Button, Card, Col, Row, Modal, Image } from 'react-bootstrap'
import { useState, useContext } from "react"
import '../../assets/styles/documento.css'
import { aumentarDescarga } from '../../services/archivos-service.js';
import { UserContext } from '../../contexts/UserContext';

export const Documento = ({archivo}) => {
  const { valid } = useContext(UserContext)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDownload = () => {
    aumentarDescarga(archivo._id)
  }

  return (
    <>
    <div>
      <Row>
          <Col>
            <Card className='my-2 documento mx-auto'>
              <Card.Header style={{backgroundColor: 'var(--mp-azul-5)'}}>{archivo.nombre}</Card.Header>
              <Card.Body className='d-flex flex-wrap justify-content-around'>
                <Image height={'90px'} width={'90px'} src={require(`../../assets/images/${archivo.docType}_icon.png`)} onClick={handleShow} style={{cursor: 'pointer'}}></Image>
                <div className='my-auto d-flex  flex-column justify-content-around'>
                  <Button variant='info' onClick={handleShow} className='mb-3'>
                    <i className="bi bi-eye-fill"></i>{' '}Vista Previa
                  </Button>
                  <Button variant='info' href={archivo.descargar} target='_blank' onClick={handleDownload}>
                    <i className="bi bi-download"></i>{' '}Descargar
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer>
                <Row>
                  {
                    valid && 
                    <Col>
                      <Button variant='warning'>
                        <i className="bi bi-tools"></i>{' '}Editar
                      </Button>
                    </Col>
                  }
                  <Col className="my-auto">{Number(archivo.tamano / 1024 / 1024).toFixed(2) + ' MB'}</Col>
                  <Col xs={3} className="d-flex justify-content-end my-auto"><i className="bi bi-arrow-down"></i> {archivo.totalDescargas}</Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
    </div>
    <Modal size='lg' show={show} onHide={handleClose}>
      <iframe title={archivo.nombre} src={`https://drive.google.com/file/d/${archivo.fileId}/preview`} 
      width="auto" height="480" allow="autoplay"></iframe>
    </Modal>
    </>
  )
}
