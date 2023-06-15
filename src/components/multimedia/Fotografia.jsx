import React from 'react'
import { getImageUrl } from '../../services/stringFormatter'

export const Fotografia = ({enlace}) => {

  return (
    <img className='img-noticia' src={getImageUrl(enlace)} alt=""/>
  )
}