import { Form, ListGroup } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import dataMunicipios from "../data/municipios.json"

export const BarraFiltros = ({activeFilter, setFiltro, resetIndex}) => {
  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/departamentos');

  const handleFilter = (deptoId) => {
    if(deptoId !== activeFilter){
      setFiltro(deptoId)
    }
    else{
      setFiltro('')
    }
    resetIndex()
  }
  return (
    <aside className="px-3 mt-4">
      <h3>Municipio</h3>
      <Form>
        <Form.Group className="mb-3">
            <Form.Select aria-label=""  id="municipio" name="municipio">
              <option value={0}>Todos los Municipios</option>
              {
                dataMunicipios.municipios.map((municipio, index) => (
                  <option value={index + 1}>{municipio}</option>
                ))
              }
            </Form.Select>
        </Form.Group>
      </Form>
      <h3>Secciones</h3>
      <ListGroup variant='dark'>
        {
          !isLoading &&
          data.map(depto => (
            <ListGroup.Item key={depto._id} variant='info' action 
            onClick={() => handleFilter(depto._id)} active={depto._id === activeFilter}>
              {depto.nombre}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </aside>
  )
}
