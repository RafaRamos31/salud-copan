import { Button, Container, Modal, Tab, Tabs } from "react-bootstrap";
//import { mockImagenes } from "../services/mock-service.js";
import { ContainerDocumentos } from "../components/ContainerDocumentos.jsx";
import { useContext, useEffect, useState } from "react";
import { SubirArchivo } from "./SubirArchivo.jsx";
import useTitle from "../hooks/useTitle.js";
import { Layout } from "./Layout.jsx";
import { UserContext } from "../contexts/UserContext.js";
import '../assets/styles/recursos.css'
import { ContainerImagenes } from "../components/ContainerImagenes.jsx";
import { PaginacionRecursos } from "../components/PaginacionRecursos.jsx";
import { RefetchContext } from "../contexts/RefetchContext.js";

export const Recursos = () => {
  useTitle("Recursos");
  const { valid } = useContext(UserContext)
  const { refetch, setRefetch } = useContext(RefetchContext)

  const [index, setIndex] = useState(1);
  const [tipo, setTipo] = useState('Documento')

  const [data, setData] = useState(null)
  const [dataImages, setDataImages] = useState(null)

   //Buscar noticias
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL +  `/archivos/${index}/${tipo ? tipo : 'Documento'}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        if(tipo === 'Documento'){
          setData(jsonData)
        }
        else{ 
          setDataImages(jsonData)
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
    setRefetch(false);
  }, [index, tipo, refetch, setRefetch])
  
  //Formulario subir recurso
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Cambio de Tabs
  const handleTabChange = (key) => {
    setIndex(1)
    setTipo(key)
  };

  return (
    <Layout pagina={"Recursos"}>
      <main>
        <h1 className="titulo-recursos">Recursos Disponibles</h1>
        {
          valid && 
          <div className="d-flex justify-content-center">
            <Button variant="warning" className="mx-4 my-3 px-4" onClick={handleShow}>
              <i className="bi bi-tools"></i>{' '}Publicar
            </Button>
          </div>
        }
        <Container>
          <PaginacionRecursos tipo={tipo} index={index} setIndex={setIndex}/>
          <Tabs
            defaultActiveKey="Documento"
            id="fill-tab-example"
            className="mb-3"
            fill
            onSelect={handleTabChange}
          >
            <Tab eventKey="Documento" title="Documentos">
              <ContainerDocumentos documentos={data} />
            </Tab>
            <Tab eventKey="Imagen" title="Imagenes">
              <Container>
                <ContainerImagenes imagenes={dataImages} />
              </Container>
            </Tab>
          </Tabs>
          <PaginacionRecursos tipo={tipo} index={index} setIndex={setIndex}/>
        </Container>
      </main>
      <Modal show={show} onHide={handleClose}>
        <SubirArchivo handleClose={handleClose}/>
      </Modal>
    </Layout>
  );
}
