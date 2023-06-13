import React from 'react'

export const Documento = ({enlace}) => {
  return (
    <a href={enlace} target="_blank" rel="noreferrer" download="document.pdf">Descargar archivo</a>
  )
}
