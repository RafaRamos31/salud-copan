import React from 'react'

export const Documento = ({enlace}) => {
  return (
    <a className='document-link' href={enlace} target="_blank" rel="noreferrer" download="document.pdf"><i class="bi bi-file-earmark-medical"></i>Ver archivo</a>
  )
}
