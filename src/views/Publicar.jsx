import { Navbar } from "../components/Navbar.jsx";
import useFetch from "../hooks/useFetch.js";
import '../assets/styles/publicar.css';
//import { mockDepartamentos } from "../services/mock-service.js";
import useForm from "../hooks/useForm.js";

export const Publicar = () => {
  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/departamentos');
  //const { data, isLoading }  = mockDepartamentos();

  const { values, handleChange } = useForm({
    departamento: '',
    contenido: '',
    multimedia: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log('Valores del formulario:', values);

    const formValues = new FormData();
    formValues.append(values.departamento);
    formValues.append(values.contenido);
    formValues.append(values.multimedia[0]);

    fetch('https://api-usaid-copan.vercel.app/api/noticias', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: formValues,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <>
      <Navbar/>
      <main>
      <h1>Proyecto Avanzando la Nutrición en Honduras</h1>
      <form onSubmit={handleSubmit}>
        <select name="departamento" id="departamento" className="form-control" onChange={handleChange}>
          <option>Region</option>
          {
            !isLoading &&
            data.map(depto => (<option key={depto._id} value={depto._id}>{depto.nombre}</option>))
          }
        </select>
        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea className="form-control" name="contenido" id="contenido" rows="3" value={values.contenido} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="multimedia">Adjuntar multimedia (imagenes, videos o documentos)</label>
          <input type="file" className="form-control-file" name="multimedia" id="multimedia" onChange={handleChange} multiple/>
        </div>
        <button type="submit" className="btn btn-primary">Publicar</button>
      </form>
      </main>
    </>
  );
}
