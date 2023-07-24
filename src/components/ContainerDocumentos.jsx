import { Container } from 'react-bootstrap'
import { Documento } from '../components/multimedia/Documento'

export const ContainerDocumentos = ({isLoading, documentos}) => {
  if(isLoading){
    return <p>Cargando datos...</p>
  }
  return (
    <Container className="d-flex flex-wrap w-100">
      {
        documentos.map((documento) => (
          <Documento key={documento._id} archivo={documento}/>
        )) 
      }
    </Container>
  )
}
