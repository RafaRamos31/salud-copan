import { Row } from 'react-bootstrap'
import { Fotografia } from '../components/multimedia/Fotografia'

export const ContainerImagenes = ({isLoading, imagenes}) => {
  if(isLoading){
    return <p>Cargando datos...</p>
  }
  return (
    <Row className='w-100 mx-auto' sm={1} md={2} lg={3}>
      {
        imagenes.map((imagen) => (
          <Fotografia key={imagen._id} enlace={imagen.enlace}/>
        )) 
      }
    </Row>
  )
}
