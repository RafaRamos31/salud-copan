import { getDateString } from "../services/stringFormatter";
import { Departamento } from "./Departamento";
import { ContainerMultimedia } from "./multimedia/ContainerMultimedia";

export const Noticia = ({noticia}) => {
  return (
    <div className="noticia">
      <div className="encabezado">
        <Departamento key={noticia._id} nombre={noticia.departamento.nombre} urlLogo={noticia.departamento.urlLogo}/>
        <p className="fecha">{getDateString(noticia.fechaPublicacion)}</p>
      </div>
      <div className="contenido">
        <p>
          {noticia.contenido}
        </p>
        <div className="container-multimedia">
          <ContainerMultimedia tipo={noticia.tipoMultimedia} enlaces={noticia.enlaces}/>
        </div>
      </div>
    </div>
  );
};
