import { Col, Row } from 'react-bootstrap'

export const CajaHerramientas = () => {
  return (
    <Row className='w-100 mx-auto'>
      <h3 className='mt-5 mb-3' style={{fontWeight: 'bold'}}>¡BIENVENIDOS A LA CAJA DE HERRAMIENTAS PARA LOS ACTORES DEL SISTEMA DE SALUD PARA MEJORAR LA CALIDAD DE LOS SERVICIOS</h3>
      <p>El acceso a información actualizada y relevante es fundamental para brindar servicios nutricionales de calidad a la población. Esta Caja de Herramientas 
        tiene como objetivo proporcionar a los actores del sector de salud, recursos de referencia ya existentes y otros 
        desarrollados por el proyecto USAID Avanzando la Nutrición Honduras, de uso práctico al personal de salud para fortalecer sus 
        competencias y el desempeño de sus labores y así mejorar la calidad de servicios de salud, el acceso a esos servicios, y 
        el estado nutricional de la población y contribuir a sentar las bases para un futuro más saludable y próspero en Honduras.</p>
        <p>Juntos, avanzamos hacia un Honduras más nutrido, educado, y sano.</p>
        <p>¡Gracias por ser parte de esta importante misión!</p>
        <Row>
          <Col sm={12} md={6} xl={4}>
            <h4 style={{fontWeight: 'bold'}}><i className="bi bi-newspaper"></i>{' '}¿Cómo priorizamos los temas de las herramientas?</h4>
            <p>Para iniciar actividades y asegurar una respuesta a las necesidades existentes que permitan orientar el 
              fortalecimiento de capacidades y competencias se desarrolló un diagnóstico de capacidades organizacionales del sector 
              a nivel institucional con las cuatro Regiones Sanitarias Departamentales, 6 Gestores de Salud Descentralizados y Centralizados, 
              Equipos de Salud Familiar (ESFAM) y Monitores de AIN-C de los 11 municipios de los cuatro departamentos del área de intervención. 
              Encontramos necesidades de fortalecimiento de los profesionales de salud en temas relacionados a la nutrición. Encontramos también
              una falta de materiales impresos sobre la Estrategia de AIN-C y normas de vigilancia nutricional.
              Luego, juntamente con los actores del sector salud a nivel departamental priorizamos los temas de las herramientas que hemos 
              incluido en esta Caja de Herramientas.</p>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <h4 style={{fontWeight: 'bold'}}><i className="bi bi-card-checklist"></i>{' '}¿Cómo diseñamos e identificamos las herramientas?</h4>
            <p>Este material fue diseñado a través de un proceso de consulta amplia de recursos y material oficial existente, 
              previamente desarrollado y validado, como también otros recursos relevantes existentes de otros proyectos y países. 
              También identificamos materiales oficiales existentes del sector salud que no están siendo utilizados adecuadamente porque 
              los actores del sector de salud no tienen acceso a ellos o desconocen su existencia.</p>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <h4 style={{fontWeight: 'bold'}}><i className="bi bi-bar-chart"></i>{' '}¿Para quienes son las herramientas?</h4>
            <p>Esta Caja de Herramientas está dirigida principalmente al personal del sector salud, específicamente el personal del primer nivel 
              de atención de servicios de salud y los monitores de AIN-C. Sin embargo, el abordaje multisectorial a la nutrición requiere la 
              coordinación y colaboración entre distintos sectores, reconociendo que la nutrición es una responsabilidad compartida. Por lo tanto,
              la Caja de Herramientas es un recurso valioso para todos aquellos actores que buscan contribuir a la mejora de la nutrición y la 
              salud de la población más vulnerable. Juntos, avanzamos hacia un Honduras más educado, nutrido y sano. ¡Gracias por ser parte de 
              esta importante misión!</p>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <h4 style={{fontWeight: 'bold'}}><i className="bi bi-easel"></i>{' '}¿Cómo pueden usar las herramientas?</h4>
            <p>Individuos pueden usar los materiales para guiar y facilitar el desempeño de sus funciones en establecimientos del primer 
              nivel de atención de servicios de salud, y las comunidades del departamento. Los materiales ayudarán a diseñar abordajes, 
              programar actividades y establecer alianzas con el propósito de mejorar los servicios nutricionales en establecimientos de 
              salud y la comunidad, la dieta de la familia, y la seguridad alimentaria y la resiliencia de las comunidades.</p>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <h4 style={{fontWeight: 'bold'}}><i className="bi bi-file-earmark-text"></i>{' '}¿Cuáles son las herramientas?</h4>
            <p>La Caja de Herramientas es una compilación de materiales relevantes para la entrega de servicios nutricionales. 
              Los materiales incluyen políticas, estrategias, normas y reglamentos, videos, brochures, manuales, y presentaciones que 
              fueron utilizados en el desarrollo de una serie de procesos y acciones para fortalecer capacidades organizacionales y 
              competencias de los actores del sector. A continuación el listado de los documentos incluidos:</p>
          </Col>
        </Row>
    </Row>
  )
}
