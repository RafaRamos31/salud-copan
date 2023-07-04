import { Button } from 'react-bootstrap'

export const Documento = ({enlace}) => {
  return (
    <Button variant='light'>
      <a className='doc-button' href={enlace} target="_blank" rel="noreferrer"><i className="bi bi-file-earmark-medical"></i>Ver archivo</a>
    </Button>
  )
}
