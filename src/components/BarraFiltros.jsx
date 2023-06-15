import React from 'react'
import useFetch from '../hooks/useFetch';
import { Departamento } from './Departamento';

export const BarraFiltros = () => {

  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/departamentos');

  return (
    <aside>
      <h3>Filtros</h3>
      {
        !isLoading &&
        data.map(depto => (
        <div className='filter-item'>
          <Departamento key={depto._id} nombre={depto.nombre} urlLogo={depto.urlLogo} />
        </div>))
      }
    </aside>
  )
}
