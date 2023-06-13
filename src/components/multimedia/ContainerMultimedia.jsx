import { Documento } from "./Documento";
import { Fotografia } from "./Fotografia";
import { Galeria } from "./Galeria";
import { Video } from "./Video";

export const ContainerMultimedia = ({tipo, enlaces}) => {
  switch (tipo) {
    case "Documento":
      return <Documento enlace={enlaces[0]}/>;

    case "Imagen":
      return <Fotografia enlace={enlaces[0]}/>;

    case "Video":
      return <Video enlace={enlaces[0]}/>;

    case "Galeria":
      return <Galeria enlaces={enlaces}/>;

    default:
      return null;
  }
  
}
