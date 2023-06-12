import logo from "../resources/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img
          src={logo}
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
            <a className="nav-link" href="noticias">
              Noticias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contacto">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="recursos">
              Recursos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="sitios">
              Sitios de Interes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login">
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
