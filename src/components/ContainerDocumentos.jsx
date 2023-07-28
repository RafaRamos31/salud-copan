import { Row } from 'react-bootstrap'
import { Documento } from '../components/multimedia/Documento'

export const ContainerDocumentos = ({isLoading, documentos}) => {
  if(isLoading){
    return <p>Cargando datos...</p>
  }
  return (
    <Row className='w-100 mx-auto' sm={1} md={2} lg={3}>
      {
        documentos.map((documento) => (
          <Documento key={documento._id} archivo={documento}/>
        )) 
      }
    </Row>
  )
}
