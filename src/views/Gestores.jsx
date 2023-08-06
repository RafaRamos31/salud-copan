import { Container, Image } from "react-bootstrap";
import { Layout } from "./Layout.jsx";
import banner from "../assets/images/bannerGestores.jpg"
import '../assets/styles/contacto.css'
import useFetch from '../hooks/useFetch.js'
import TableauDashboard from "../components/TableauDashboard.jsx";

export const Gestores = () => {
  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/departamentos');

  return (
    <Layout pagina={"Gestores"}>
      <Image src={banner}
      className="animate__animated animate__fadeIn w-100" style={{maxHeight: '300px', objectFit: 'cover'}} fluid/>
      <h1 className="titulo-contacto">GESTORES</h1>
      <Container>
      {
        !isLoading &&
        data.map(depto => (
          <div key={depto._id}>
            <img className='icon-departamento' src={depto.urlLogo} alt={"logo" + depto.nombre} />
            <h2>{depto.nombre}</h2>
            <hr />
          </div>
        ))
        } 
        <TableauDashboard urlTablero={"https://public.tableau.com/views/CMO_1/GlobalOverview?:embed=y&:embed_code_version=3&:loadOrderID=4&:display_count=y&:origin=viz_share_link"} />
      </Container>            
    </Layout>
  );
};
