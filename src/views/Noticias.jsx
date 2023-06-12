import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar.jsx";

export const Noticias = () => {

  const [noticias, setNoticias] = useState(null);

  console.log(process.env.REACT_APP_API_URL + '/noticias');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/noticias');
        const jsonData = await response.json();
        setNoticias(jsonData);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
      {noticias ? (
        <ul>
          {noticias.map(item => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
      </div>
      <Navbar/>
      <main>
  
      </main>
    </>
  );
}
