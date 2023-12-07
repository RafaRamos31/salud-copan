import { Button, Card, Image } from 'react-bootstrap'
import '../../assets/styles/documento.css'

export const DocumentoCajaHerramientas = ({enlace, nombre, tipo}) => { 

  const openFile = () => {
    window.open(enlace, '_blank');
  }

  return (
    <>
    <Card className='my-2 px-0 documento mx-auto' style={{maxWidth: '400px'}}>
      <Card.Header style={{backgroundColor: 'var(--mp-azul-5)', cursor: 'pointer'}} onClick={openFile}>{nombre}</Card.Header>
      <Card.Body className='d-flex flex-wrap justify-content-around'>
        <Image height={'90px'} width={'90px'} src={require(`../../assets/images/${tipo}_icon.png`)} onClick={openFile} style={{cursor: 'pointer'}}></Image>
        <div className='my-auto d-flex  flex-column justify-content-around'>
          <Button variant='info'>
            <a href={enlace} download={nombre} style={{textDecoration: 'none', color:'black'}}>
              <i className="bi bi-download"></i>{' '}Descargar
            </a>
          </Button>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}
