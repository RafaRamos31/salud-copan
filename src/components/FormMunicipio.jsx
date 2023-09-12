import { useState } from "react"
import { Button, Card, Table } from "react-bootstrap"
import useForm from "../hooks/useForm"
import { range } from "lodash"

export const FormMunicipio = ({municipio, index, setContactos}) => {

  const [name, setName] = useState(municipio.name)
  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const establecimientos = {}
  const telefonos = {}
  const [size, setSize] = useState(municipio.referencias.length)

  municipio.referencias.map((valor, i) => {
    establecimientos[`place-${i}`] = valor.split(':')[0];
    telefonos[`phone-${i}`] = valor.split(':')[1]
    return i;
  })

  //Formulario
  const { values: placeValues, handleChange: handleChangePlaces} = useForm(establecimientos);
  const { values: phoneValues, handleChange: handleChangePhones } = useForm(telefonos);

  /*const handleAddEstablecimiento = () => {
    setContactos([...contactos, {name: '', referencias: [":"]}])
    console.log(contactos)
  }*/

  return (
    <Card className='px-4 py-2 my-2 mx-1' key={index} style={{backgroundColor: 'var(--mp-azul-6)'}}>
      <input type="text" className='my-2' value={name} onChange={handleChangeName}/>
      <Table responsive="sm" bordered>
        <thead>
          <tr>
            <th>Nombre establecimiento</th>
            <th>Telefonos</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            range(0, size).map(i => (
              <tr key={i}>
                <td><input type="text" style={{width: '100%'}} name={`place-${i}`} id={`place-${i}`} value={placeValues[`place-${i}`]} onChange={handleChangePlaces}/></td>
                <td><input type="text" style={{width: '100%'}}/></td>
                <td className="d-flex justify-content-center align-items-center">
                  <Button variant="danger">
                    <i className="bi bi-trash"></i>{' '}Eliminar
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
          <Button variant="info" className='my-2'>
            Agregar establecimiento
          </Button>
      </Table>
    </Card>
  )
}
