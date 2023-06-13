import { Documento } from "./Documento";
import { Fotografia } from "./Fotografia";
import { Galeria } from "./Galeria";
import { Video } from "./Video";

export const ContainerMultimedia = ({tipo, enlaces}) => {
  switch (tipo) {
    case "documento":
      return <Documento enlace={enlaces[0]}/>;

    case "foto":
      return <Fotografia enlace={enlaces[0]}/>;

    case "video":
      return <Video enlace={enlaces[0]}/>;

    case "galeria":
      return <Galeria enlaces={enlaces}/>;

    default:
      return null;
  }
  
}
