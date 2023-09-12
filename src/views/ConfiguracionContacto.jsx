import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FormMunicipio } from '../components/FormMunicipio';

export const ConfiguracionContactos = ({data, handleClose=null}) => {

  const [contactos, setContactos] = useState(data)
  
  const handleAddMunicipio = () => {
    setContactos([...contactos, {name: '', referencias: [":"]}])
  }

  return (
    <Card>
      <Card.Header>
        <h3>Editar Infomación de Contacto</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
        {
          contactos.map((municipio, index) => (
            <FormMunicipio municipio={municipio} index={index} setContactos={setContactos}/>
          ))
        }
        <Button variant="info" onClick={handleAddMunicipio}>
          Agregar Municipio
        </Button>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-center'>
        <Button variant="warning">
          Guardar Cambios
        </Button>
      </Card.Footer>
    </Card>
  );
}
