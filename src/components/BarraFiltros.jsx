import { ListGroup } from 'react-bootstrap';
//import useFetch from '../hooks/useFetch';
import { mockDepartamentos } from '../services/mock-service';

export const BarraFiltros = ({activeFilter}) => {
  //const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/departamentos');
  const { data, isLoading }  = mockDepartamentos();

  return (
    <aside className="px-3 mt-4">
      <h3>Filtros</h3>
      <ListGroup variant='dark'>
        {
          !isLoading &&
          data.map(depto => (
            <ListGroup.Item key={depto._id} variant='info' action 
            href={depto._id !== activeFilter ? `/noticias/${depto._id}/1` : `/noticias/1`} active={depto._id === activeFilter}>
              {depto.nombre}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </aside>
  )
}
