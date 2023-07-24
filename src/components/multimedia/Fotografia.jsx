import React from 'react'
import { getImageUrl } from '../../services/stringFormatter'
import { Image } from 'react-bootstrap'

export const Fotografia = ({enlace}) => {

  return (
    <Image className='noticia-img' src={getImageUrl(enlace)} thumbnail fluid/>
  )
}