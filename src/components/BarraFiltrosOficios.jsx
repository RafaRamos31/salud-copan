import { Accordion, ListGroup } from 'react-bootstrap';

export const BarraFiltrosOficios = () => {

  const handleSearch = (position) => {
    console.log(position)
  }

  return (
    <Accordion alwaysOpen>
      {
        ['2023', '2022', '2021'].map((year) => (
          <Accordion.Item key={year} eventKey={year}>
            <Accordion.Header><h4>{year}</h4></Accordion.Header>
            <Accordion.Body className="m-0 p-0">
              <Accordion alwaysOpen>
                {
                  ['Agosto', 'Julio', 'Junio', 'Mayo', 'Abril', 'Marzo', 'Febrero', 'Enero'].map((mes) => (
                    <Accordion.Item key={mes} eventKey={mes}>
                      <Accordion.Header className='p-0'><h6>{mes}</h6></Accordion.Header>
                      <Accordion.Body className="m-0 p-0">
                        <ListGroup>
                          {
                            ['Oficios', 'Reglamentos'].map((tipo) => (
                              <ListGroup.Item key={tipo} variant='info' action 
                              onClick={() => handleSearch(`${year}-${mes}-${tipo}`)}>
                                <i className="bi bi-caret-right-square"></i>{' '}{tipo}
                              </ListGroup.Item>
                            ))
                          }
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>      
                  ))
                }
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        ))
      }
    </Accordion>
  )
}
