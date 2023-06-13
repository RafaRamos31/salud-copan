import { ContainerMultimedia } from "./multimedia/ContainerMultimedia";

export const Noticia = ({noticia}) => {
  return (
    <div className="noticia">
      <div className="encabezado">
        <div className="gestor">
          <div className="icon-gestor"></div>
        </div>
        <p className="fecha">{noticia.fechaPublicacion}</p>
      </div>
      <div className="contenido">
        <p>
          {noticia.contenido}
        </p>
        <ContainerMultimedia tipo={noticia.tipoMultimedia} enlaces={noticia.enlaces}/>
      </div>
    </div>
  );
};
