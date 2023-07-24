import { Layout } from "./Layout.jsx";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import fondo from "../assets/images/fondo-main.jpg"
import organigrama from "../assets/images/organigrama.jpg"
import lider from "../assets/images/img-lider.jpg"
import nosotros from "../assets/images/img-nosotros.jpg"
import data from "../data/info-pagina.json"; 
import '../assets/styles/home.css';

export const Home = () => {
  return (
    <Layout pagina={data.area}>
      <Container>
        <section>
          <Image src={fondo}
          className="animate__animated animate__fadeIn" id="main-image" fluid/>
          <h1 id="main-title" className="animate__animated animate__fadeInUp">Proyecto Avanzando la Nutrición en Honduras</h1>
          <p id="text-departamento" className="animate__animated animate__fadeInUp">Departamento de {data.departamento}</p>
        </section>

        <section className="sobre-nosotros" id="sobre-nosotros">
          <h2 className="sub-title">¿Quiénes Somos?</h2>
          <Card>
            <Card.Body className="nosotros-container">
              <Row>
              <Col md={9}>
                <p className="text-nosotros">
                  {data["quienes-somos"]}
                </p>
              </Col>
              <Col md={3}>
                <Image id="img-about" src={nosotros} fluid thumbnail/>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <Image id="img-about" src={lider} fluid rounded/>
              </Col>
              <Col md={9}>
                <blockquote className="text-fundador">
                  {data.mensaje}
                </blockquote>
                <p className="autor">
                  {data.autor}
                </p>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </section>

        <section className="mision-vision" id="mision-vision">
          <h2 className="sub-title">Misión y Visión</h2>
          <Row>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="item">
                  <div className="icon">
                    <i className="bi bi-book text-icon"></i>Misión
                  </div>
                  <div className="content">
                    {data.mision}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="item">
                  <div className="icon">
                    <i className="bi bi-search text-icon"></i>Visión
                  </div>
                  <div className="content">
                    {data.vision}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="organigrama" id="organigrama">
          <h2 className="sub-title">Organigrama</h2>
          <div className="media-container">
            <Image src={organigrama} fluid thumbnail/>
          </div>
        </section>

        <section className="valores" id="valores">
          <h2 className="sub-title">Nuestros Valores</h2>
          <Card>
            <Card.Body className="nosotros-container">
            <ul>
              {
                data.valores.map((valor, i) => (<li key={i}>
                  <b>{valor.nombre}</b>{': ' + valor.contenido}
                </li>))
              }
              </ul>
            </Card.Body>
          </Card>
        </section>

        <section className="cobertura" id="cobertura">
          <h2 className="sub-title">Cobertura</h2>
          <div className="media-container">
            <iframe title={data.departamento} src={data["enlace-mapa"]} 
            width="600" height="480"></iframe>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
