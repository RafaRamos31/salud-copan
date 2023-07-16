import { Accordion, Button, Col, Container, Form, Row } from "react-bootstrap";
import useForm from "../hooks/useForm.js";
import { Layout } from "./Layout.jsx";

export const Contacto = () => {
  const { values, handleChange } = useForm({
    nombre: "",
    apellido: "",
    municipio: "",
    comunidad: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Layout pagina={"Contacto"}>
      <Container>
        <Row>
          <Col lg={5} className="px-4">
            <h3 className="my-3">Nuestros Telefonos</h3>
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Santa Rosa de Copán</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Establecimiento 1: +504 9876-6789</li>
                    <li>Establecimiento 2: +504 9876-6789</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>La Entrada</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Establecimiento 1: +504 9876-6789</li>
                    <li>Establecimiento 2: +504 9876-6789</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Copán Ruinas</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Establecimiento 1: +504 9876-6789</li>
                    <li>Establecimiento 2: +504 9876-6789</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={7}>
            <h3 className="my-3">Formulario de Contacto</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      name="nombre"
                      id="nombre"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      name="apellido"
                      id="apellido"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Municipio</Form.Label>
                    <Form.Control
                      name="municipio"
                      id="municipio"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Comunidad</Form.Label>
                    <Form.Control
                      name="comunidad"
                      id="comunidad"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control
                      type="email"
                      name="correo"
                      id="correo"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      name="telefono"
                      id="telefono"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ingrese su mensaje..."
                  style={{ height: "200px" }}
                  name="mensaje"
                  id="mensaje"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                as="input"
                variant="info"
                type="submit"
                value="Enviar Formulario"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
