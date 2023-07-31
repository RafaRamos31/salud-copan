import { Noticia } from "./Noticia"

export const ContainerNoticias = ({noticias}) => {
  return (
    <div className="contenedor-noticias">
      {
        noticias.map((noticia) => (
          <Noticia key={noticia._id} noticia={noticia} />
        )) 
      }
    </div>
  )
}
