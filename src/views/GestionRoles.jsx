import { Button, Container, Modal } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import useFetch from "../hooks/useFetch";
import { Layout } from "./Layout";
import { getDateString } from "../services/stringFormatter";
import { RegistrarUsuario } from "./RegistrarUsuario";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const GestionRoles = () => {
  //Validacion
  const {valid, userData} = useContext(UserContext);
  const navigation = useNavigate()
  useEffect(() => {
    if(!valid || userData.rol !== 'Master'){
      navigation('/')
    }

  }, [valid, userData, navigation])
  

  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/admin/userlist');

  //Modal registro
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout pagina={"Gestión de Roles"}>
      <Container>
      <h1 className="titulo-contacto">GESTIÓN DE ROLES</h1>
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Última Conexión</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {
              !isLoading && data &&
              data.map((user, i) => (
                <tr key={user._id}>
                  <td>{i+1}</td>
                  <td>{user.username}</td>
                  <td>{user.nombre}</td>
                  <td>{user.rol}</td>
                  <td>{getDateString(user.ultimaConexion)}</td>
                  <td>EDITAR</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <Button variant="warning" className="mx-4 my-3 px-4" onClick={handleShow}>
              <i className="bi bi-tools"></i>{' '}Registrar
        </Button>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <RegistrarUsuario handleClose={handleClose}/>
      </Modal>
    </Layout>
  );
}
