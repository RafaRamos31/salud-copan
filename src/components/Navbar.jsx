export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/api">
        <img
          src="recursos/logo.png"
          width="90"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Nutrición | Copán
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/api/noticias.php">
              Noticias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/api/contacto.php">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/api/publicar.php">
              Recursos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sitios de Interes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <button type="button" className="btn btn-warning">
                <i className="bi bi-door-open-fill"></i>
                Gestión
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
