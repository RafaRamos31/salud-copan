import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../views/Home'
import { Noticias } from '../views/Noticias'
import { Recursos } from '../views/Recursos'
import { Contacto } from '../views/Contacto'
import { Sitios } from '../views/Sitios'
import { Login } from '../views/Login'
import { Publicar } from '../views/Publicar'
import { UserContextProvider } from '../contexts/UserContext'

export const MainRouter = () => {
  return (
    <>
      <UserContextProvider>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/noticias" element={<Navigate to="/noticias/1" replace />}/>
        <Route path="noticias/:index" element={<Noticias />}></Route>
        <Route path="noticias/:idDepto/:index" element={<Noticias />}></Route>
        <Route path="contacto" element={<Contacto />}></Route>
        <Route path="recursos" element={<Recursos />}></Route>
        <Route path="sitios" element={<Sitios />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="publicar" element={<Publicar />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      </UserContextProvider>
    </>
  )
}
