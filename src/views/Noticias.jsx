import { useContext, useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { ContainerNoticias } from "../components/ContainerNoticias.jsx";
//import { mockNoticias } from "../services/mock-service.js";
import { Publicar } from "./Publicar.jsx";
import { PaginacionNoticias } from "../components/PaginacionNoticias.jsx";
import { BarraFiltros } from "../components/BarraFiltros.jsx";
import "../assets/styles/noticias.css";
import { Layout } from "./Layout.jsx";
import { UserContext } from "../contexts/UserContext.js";
import { RefetchContext } from "../contexts/RefetchContext.js";

export const Noticias = () => {
  const {valid} = useContext(UserContext);
  const { refetch, setRefetch } = useContext(RefetchContext)

  //Navigation filters
  const [index, setIndex] = useState(1);
  const [idDepto, setIdDepto] = useState(null)

  const [noticias, setNoticias] = useState(null)
  
  //Modal publicar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //Buscar noticias
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL +  `/noticias/${index}${idDepto ? '/' + idDepto : ''}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        setNoticias(jsonData);
      } catch (error) {
        console.error(error.message);
      }
    }
    setRefetch(false)
    fetchData();  
  }, [index, idDepto, refetch, setRefetch])
  
  
  return (
    <Layout pagina={"Noticias"}>
      <Row className="w-100">
        <Col md={3}>
          <BarraFiltros activeFilter={idDepto} setFiltro={setIdDepto} resetIndex={() => setIndex(1)}/>
          {
          valid ?  
            <Button className="mx-3 my-3" variant="warning" onClick={handleShow}>
              <i className="bi bi-tools"></i>{' '}Publicar
            </Button>
            : ''
          }
        </Col>
        <Col md={9}  className="px-0">
          <PaginacionNoticias idDepto={idDepto} index={Number.parseInt(index)} setIndex={setIndex} />
          {noticias && <ContainerNoticias noticias={noticias} />}
          <PaginacionNoticias idDepto={idDepto} index={Number.parseInt(index)} setIndex={setIndex} />
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Publicar handleClose={handleClose}/>
      </Modal>
    </Layout>
  );
};
