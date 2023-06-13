import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../views/Home'
import { Noticias } from '../views/Noticias'
import { Recursos } from '../views/Recursos'
import { Contacto } from '../views/Contacto'
import { Sitios } from '../views/Sitios'
import { Login } from '../views/Login'
import { Publicar } from '../views/Publicar'

export const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="noticias" element={<Noticias />}></Route>
        <Route path="contacto" element={<Contacto />}></Route>
        <Route path="recursos" element={<Recursos />}></Route>
        <Route path="sitios" element={<Sitios />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="publicar" element={<Publicar />}></Route>
      </Routes>
    </>
  )
}
