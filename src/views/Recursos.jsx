import { Container, Tab, Tabs } from "react-bootstrap";
import { SiteNavBar } from "../components/SiteNavBar.jsx";
import { mockArchivos } from "../services/mock-service.js";
import { ContainerDocumentos } from "../components/ContainerDocumentos.jsx";

export const Recursos = () => {
  const {data, isLoading} = mockArchivos();

  return (
    <>
      <SiteNavBar/>
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
    </>
  );
}
