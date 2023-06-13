import { ContainerNoticias } from "../components/ContainerNoticias.jsx";
import { Navbar } from "../components/Navbar.jsx";
import useFetch from "../hooks/useFetch.js";
//import { mockNoticias } from "../services/mock-service.js";
import '../assets/styles/noticias.css';

export const Noticias = () => {

  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/noticias');
  //const { data, isLoading }  = mockNoticias();

  return (
    <>
      <Navbar/>
      <main>
        <aside>
          Filtros
        </aside>
        {!isLoading && <ContainerNoticias noticias={data}/>}
      </main>
    </>
  );
}
