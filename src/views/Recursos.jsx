import { Button, Container, Modal, Tab, Tabs } from "react-bootstrap";
//import { mockArchivos } from "../services/mock-service.js";
import { ContainerDocumentos } from "../components/ContainerDocumentos.jsx";
import { useContext, useState } from "react";
import { SubirArchivo } from "./SubirArchivo.jsx";
import useTitle from "../hooks/useTitle.js";
import { Layout } from "./Layout.jsx";
import { UserContext } from "../contexts/UserContext.js";
import useFetch from "../hooks/useFetch.js";
import '../assets/styles/recursos.css'

export const Recursos = () => {
  useTitle("Recursos");

  const { valid } = useContext(UserContext)

  const {data, isLoading} = useFetch(process.env.REACT_APP_API_URL + '/archivos/1/Documento');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Tabs
            defaultActiveKey="home"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="home" title="Documentos">
              {!isLoading && <ContainerDocumentos  documentos={data} />} 
            </Tab>
            <Tab eventKey="profile" title="Imagenes">
              <Container>

              </Container>
            </Tab>
          </Tabs>
        </Container>
      </main>
      <Modal show={show} onHide={handleClose}>
        <SubirArchivo />
      </Modal>
    </Layout>
  );
}
