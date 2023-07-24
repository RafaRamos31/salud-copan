import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContainerNoticias } from "../components/ContainerNoticias.jsx";
//import { mockNoticias } from "../services/mock-service.js";
import { Publicar } from "./Publicar.jsx";
import { PaginacionNoticias } from "../components/PaginacionNoticias.jsx";
import { BarraFiltros } from "../components/BarraFiltros.jsx";
import useFetch from "../hooks/useFetch.js";
import "../assets/styles/noticias.css";
import { Layout } from "./Layout.jsx";

export const Noticias = () => {
  const { idDepto, index } = useParams();
  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL +  `/noticias/${index}${idDepto ? '/' + idDepto : ''}`);
  //const { data, isLoading } = mockNoticias();
  const [show, setShow] = useState(false);

  const valid = localStorage.getItem("user-id");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout pagina={"Noticias"}>
      <Row>
        <Col md={3}>
          <BarraFiltros activeFilter={idDepto} />
          {
          valid ?  
            <Button className="mx-3 my-3" variant="warning" onClick={handleShow}>
              <i className="bi bi-tools"></i>{' '}Publicar
            </Button>
            : ''
          }
        </Col>
        <Col md={9} className="px-0">
          <PaginacionNoticias idDepto={idDepto} index={Number.parseInt(index)} />
          {!isLoading && <ContainerNoticias noticias={data} />}
          <PaginacionNoticias idDepto={idDepto} index={Number.parseInt(index)} />
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Publicar />
      </Modal>
    </Layout>
  );
};
