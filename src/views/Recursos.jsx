import { Button, Container, Modal, Tab, Tabs } from "react-bootstrap";
import { mockArchivos } from "../services/mock-service.js";
import { ContainerDocumentos } from "../components/ContainerDocumentos.jsx";
import { useState } from "react";
import { SubirArchivo } from "./SubirArchivo.jsx";
import useTitle from "../hooks/useTitle.js";
import { Layout } from "./Layout.jsx";

export const Recursos = () => {
  useTitle("Recursos");
  const {data, isLoading} = mockArchivos();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout pagina={"Recursos"}>
      <Button variant="info" onClick={handleShow}>
              Publicar
          </Button>
      <main>
        <h1>Recursos Disponibles</h1>
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
