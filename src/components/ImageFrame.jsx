import { Button, Card } from 'react-bootstrap'
import { Fotografia } from '../components/multimedia/Fotografia'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export const ImageFrame = ({imagen}) => {

  const {valid} = useContext(UserContext)
  return (
    <Card className='mb-3 px-0' >
      <Card.Header>
        <p>{imagen.nombre}</p>
      </Card.Header>
      <Card.Body className='d-flex align-items-center justify-content-center'>
        <Fotografia key={imagen._id} enlace={imagen.enlace}/>
      </Card.Body>
      {
        (valid) &&
        <Card.Footer>
          <Button variant="warning"><i className="bi bi-tools "></i>{' '}Modificar</Button>
          <Button variant="danger" className="mx-3"><i className="bi bi-tools"></i>{' '}Eliminar</Button>
        </Card.Footer>
      }
    </Card>
  )
}
