import { Documento } from "./Documento";
import { Fotografia } from "./Fotografia";
import { Video } from "./Video";

export const ContainerMultimedia = ({tipo, enlace}) => {
  switch (tipo) {
    case "Documento":
      return <Documento enlace={enlace}/>;

    case "Imagen":
      return <Fotografia enlace={enlace}/>;

    case "Video":
      return <Video enlace={enlace}/>;

    default:
      return null;
  }
  
}
