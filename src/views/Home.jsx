import { Navbar } from "../components/Navbar.jsx";
import data from "../resources/general-data.json"; 

export const Home = () => {
  return (
    <>
      <Navbar/>
      <main>
    <hero>
      <h1>Proyecto Avanzando la Nutrición en Honduras</h1>
      <p>Departamento de Copán</p>
      <img className="img-principal" src="https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2023/03/1140-heart-health-weight-loss-esp.jpg" alt="banner nutricion" />
    </hero>
    <section className="sobre-nosotros">
      <h2>¿Quiénes Somos?</h2>
      <div className="container">
        <p className="text-nosotros">
          {data["quienes-somos"]}
        </p>
        <img className="img-nosotros" src="https://media.istockphoto.com/id/888804786/es/foto/permita-que-sus-manos-decida.jpg?s=612x612&w=0&k=20&c=1zGpVGIKYfLwvh60E3iIn33O6tHYkskx3jvUdF_d5Ws=" alt="ayuda humanitaria" />
      </div>
    </section>

    <section className="mision-vision">
      <h2>Misión y Visión</h2>
      <div className="items-container">
        <div className="item">
          <i className="bi bi-book"></i>
          <h3>Misión</h3>
          {data.mision}
        </div>
        <div className="item">
        <i className="bi bi-search"></i>
          <h3>Visión</h3>
          {data.vision}
        </div>
      </div>
    </section>

    <section className="organigrama">
      <h2>Organigrama</h2>
      <div className="media-container">
      <img className="organigrama" src="https://www.ticportal.es/wp-content/uploads/matrix-structure-design.png?x25788" alt="organigrama" />
      </div>
    </section>

    <section className="valores">
      <h2>Nuestros Valores</h2>
    </section>

    <section className="cobertura">
      <h2>Cobertura</h2>
      <div className="media-container">
      <iframe className="mapa"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493582.2588882428!2d-89.14612277218666!3d14.875048111687356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63f61fa675ea93%3A0xb654128df1967c0f!2sConsejo%20Intermunicipal%20Higuito!5e0!3m2!1ses-419!2shn!4v1686173450121!5m2!1ses-419!2shn" 
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  </main>
    </>
  );
}
