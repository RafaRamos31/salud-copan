import { useState, useEffect } from 'react';
import {  Nav, NavDropdown, Navbar, Tab } from 'react-bootstrap';

export const BarraFiltrosOficios = ({setDocumentos, setImagenes, setView}) => {

  const [query, setQuery] = useState('');
  const [refetch, setRefetch] = useState(false);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRefetch(true)
  }

  //Buscar noticias
  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append('query', query)
        const response = await fetch(process.env.REACT_APP_API_URL +  `/query`, {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        const archivos = jsonData.filter((e) => e.tipo === 'Documento')
        const imagenes = jsonData.filter((e) => e.tipo === 'Imagen')
        setDocumentos(archivos)
        setImagenes(imagenes)
      } catch (error) {
        console.error(error.message);
      }
    }

    if(refetch){
      fetchData();
      setRefetch(false)
    }
  }, [query, refetch, setDocumentos, setImagenes])

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="publicaciones">
      <Navbar bg="light" expand="lg" className="justify-content-center">
      <Nav className="flex-column">
            <NavDropdown title="Publicaciones" className='w-100 text-center' id="documentos-dropdown">
              <NavDropdown.Item href="#documentos" onClick={() => setView('publicaciones')}>Todos los Archivos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#pub-informes">Informes</NavDropdown.Item>
              <NavDropdown.Item href="#pub-formularios">Formularios</NavDropdown.Item>
              <NavDropdown.Item href="#pub-reglamentos">Reglamentos</NavDropdown.Item>
              <NavDropdown.Item href="#pub-formularios">Cuestionarios</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Oficios" id="oficios-dropdown">
              <NavDropdown.Item href="#oficios" onClick={() => setView('oficios')}>Todos los Oficios</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Caja de Herramientas" id="herramientas-dropdown">
              <NavDropdown.Item href="#herramientas" onClick={() => setView('herramientas')}>Todos los archivos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#herr-laminas" onClick={() => setView('herr-laminas')}>Laminas</NavDropdown.Item>
              <NavDropdown.Item href="#herr-compromiso" onClick={() => setView('herr-compromiso')}>Hojas de Compromiso</NavDropdown.Item>
              <NavDropdown.Item href="#herr-manuales" onClick={() => setView('herr-manuales')}>Manuales</NavDropdown.Item>
              <NavDropdown.Item href="#herr-registros" onClick={() => setView('herr-registros')}>Registros</NavDropdown.Item>
              <NavDropdown.Item href="#herr-tarjetas" onClick={() => setView('herr-tarjetas')}>Tarjetas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar>
    </Tab.Container>
  )
}
