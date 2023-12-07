import { Row } from 'react-bootstrap'
import { DocumentoCajaHerramientas } from './multimedia/DocumentoCajaHerramientas'
import grafica1 from '../media/Grafica de Crecimiento LA - Niño-01.jpg'
import lamina1 from '../media/Lamina Ampliada Consejeria de Crecimiento-01.jpg'
import lamina2 from '../media/Lamina Ampliada Consejeria de niño enfermo Aplicado-01.jpg'
import lamina3 from '../media/Lamina Ampliada Grafica de Indicadores de Seguimiento-01.jpg'
import lamina4 from '../media/Lamina Ampliada Guia para la Accion-01.jpg'
import lamina5 from '../media/Lamina Ampliada Resumen de Actividades-01.jpg'
import lamina6 from '../media/Lamina Ampliada Tabla de Peso Minimo lleva Cambios-01.jpg'
import lamina7 from '../media/Lamina Ampliada Tabla de conversion de Kilos a Libras-01.jpg'
import lamina8 from '../media/Lamina AmpliadaLamina Referencia-01.jpg'
import lamina9 from '../media/Lamina Registro Diario Atencion Niño - a-01.jpg'
import registro1 from '../media/Registro de Atencion Diario-01.jpg'
import grafica2 from '../media/Block Grafica de Indicadores de Seguimiento JP.pdf'
import hojaCompromiso1 from '../media/Block Hoja de Compromiso de 0 a 6 meses-01.pdf'
import hojaCompromiso2 from '../media/Block Hoja de Compromiso de 6 a 8 meses-01.pdf'
import hojaCompromiso3 from '../media/Block Hoja de Compromiso de 9 a 11 meses-01.pdf'
import hojaCompromiso4 from '../media/Block Hoja de Compromiso de 12 a 17 meses-01.pdf'
import informe1 from '../media/Block Informe Comunitario.pdf'
import laminas10 from '../media/Laminas de Consejeria.pdf'


export const CajaHerramientas = () => {
  return (
    <Row className='w-100 mx-auto' sm={1} md={2} lg={3}>
      <DocumentoCajaHerramientas enlace={grafica1} nombre={'Grafica de Crecimiento LA - Niño-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={lamina1} nombre={'Lamina Ampliada Consejeria de Crecimiento-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={lamina2} nombre={'Lamina Ampliada Consejeria de niño enfermo Aplicado-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={lamina3} nombre={'Lamina Ampliada Grafica de Indicadores de Seguimiento-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={lamina4} nombre={'Lamina Ampliada Guia para la Accion-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={lamina5} nombre={'Lamina Ampliada Resumen de Actividades-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={lamina6} nombre={'Lamina Ampliada Tabla de Peso Minimo lleva Cambios-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={lamina7} nombre={'Lamina Ampliada Tabla de conversion de Kilos a Libras-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={lamina8} nombre={'Lamina AmpliadaLamina Referencia-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={lamina9} nombre={'Lamina Registro Diario Atencion Niño - a-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={registro1} nombre={'Registro de Atencion Diario-01.jpg'} tipo={'image'}/>
      <DocumentoCajaHerramientas enlace={grafica2} nombre={'Block Grafica de Indicadores de Seguimiento JP.pdf'} tipo={'pdf'}/>
      <DocumentoCajaHerramientas enlace={hojaCompromiso1} nombre={'Block Hoja de Compromiso de 0 a 6 meses-01.pdf'} tipo={'pdf'}/>
      <DocumentoCajaHerramientas enlace={hojaCompromiso2} nombre={'Block Hoja de Compromiso de 6 a 8 meses-01.pdf'} tipo={'pdf'}/>
      <DocumentoCajaHerramientas enlace={hojaCompromiso3} nombre={'Block Hoja de Compromiso de 9 a 11 meses-01.pdf'} tipo={'pdf'}/>
      <DocumentoCajaHerramientas enlace={hojaCompromiso4} nombre={'Block Hoja de Compromiso de 12 a 17 meses-01.pdf'} tipo={'pdf'}/>
      <DocumentoCajaHerramientas enlace={informe1} nombre={'Block Informe Comunitario.pdf'} tipo={'pdf'}/>
      <DocumentoCajaHerramientas enlace={laminas10} nombre={'Laminas de Consejeria.pdf'} tipo={'pdf'}/>
    </Row>
  )
}
