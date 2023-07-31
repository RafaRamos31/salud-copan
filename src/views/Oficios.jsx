import { Accordion, Container, Image } from "react-bootstrap";
import { Layout } from "./Layout.jsx";
import banner from "../assets/images/bannerOficios.jpg"
import '../assets/styles/contacto.css'
import { Documento } from "../components/multimedia/Documento.jsx";
import { mockOficio } from "../services/mock-service.js";

export const Oficios = () => {
  const oficio = mockOficio()

  return (
    <Layout pagina={"Oficios"}>
      <Image src={banner}
      className="animate__animated animate__fadeIn w-100" style={{maxHeight: '300px', objectFit: 'cover'}} fluid/>
      <h1 className="titulo-contacto">OFICIOS</h1>
      <Container>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header><h2>2023</h2></Accordion.Header>
          <Accordion.Body>
            {
              ['Agosto', 'Julio', 'Junio', 'Mayo', 'Abril', 'Marzo', 'Febrero', 'Enero'].map((mes, index) => (
                <div key={index}>
                  <h3>{mes}</h3>
                  <hr />
                  <Documento archivo={oficio}></Documento>
                </div>
              ))
            }
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
        <Accordion.Header><h2>2022</h2></Accordion.Header>
          <Accordion.Body>
            {
              ['Diciembre', 'Noviembre', 'Octubre', 'Septiembre', 'Agosto', 'Julio', 'Junio', 'Mayo', 'Abril', 'Marzo', 'Febrero', 'Enero'].map((mes, index) => (
                <div key={index}>
                  <h3>{mes}</h3>
                  <hr />
                  <Documento archivo={oficio}></Documento>
                </div>
              ))
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>            
    </Layout>
  );
};

