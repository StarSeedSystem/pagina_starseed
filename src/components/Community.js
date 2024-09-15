import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './ContentSection';

// Elimina esta definición de Title ya que usaremos SectionTitle
// const Title = styled.h2`
//   font-size: 2.5rem;
//   color: ${props => props.theme.colors.primary};
//   margin-bottom: 1rem;
// `;

const Button = styled(motion.button)`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  border: none;
  padding: 1rem 2rem;
  margin: 0.75rem;
  cursor: pointer;
  font-size: 1.4rem;
  border-radius: 30px;
`;

const Content = styled(motion.div)`
  margin-top: 2rem;
  font-size: 1.4rem;
`;

const Community = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { 
      title: 'Propósito', 
      content: 'Espacios sociales presenciales donde se implementa el sistema StarSeed. Estos espacios contienen áreas educativas, recreativas, de salud, viviendas, industriales, de organización política, económica y cultural, con el objetivo de fomentar entornos pacíficos, autosuficientes, ecológicos, libres, saludables, divertidos, sociales y comunitarios.' 
    },
    { 
      title: 'Plan Social', 
      content: 'Para la implementación armónica y fluida del sistema StarSeed en la sociedad es mejor empezar por la red sociocultural, para crear espacios, juntar recursos sociales, económicos y darlo a conocer, después crear la red socioeducativa y así formar bases de buenos conocimientos conscientes coherentes en la educación para que cuando se participe en la red sociopolítica cuando se cree, se tomen decisiones pacíficas con bases de información verídica accesible.' 
    },
    { 
      title: 'Plan Económico', 
      content: [
        'El proyecto comienza bajo un modelo capitalista, solicitando una donación mínima por cada entrada, producto o servicio ofrecido por la fundación y sus miembros, quienes reciben un salario fijo.',
        'Una vez que la comunidad alcanza la capacidad de producir bienes y servicios de manera abundante, sostenible y ecológica, el sistema se transforma en un modelo comunista. En esta etapa, todo es gratuito, y los servicios son proporcionados por voluntarios con la ayuda de tecnologías avanzadas, como la inteligencia artificial y robots, que eventualmente se encargan de las tareas más laboriosas de forma automática.',
      ]
    },
    { 
      title: 'Suscripciones y Asociaciones', 
      content: [
        'Grupos e individuos pueden asociarse o suscribirse al sistema StarSeed.',
        'La constitución de StarSeed se aplica a cualquier comunidad que la acepte y pueda ofrecer comunidad, espacios, productos o servicios alineados con los principios de StarSeed. Además, se promueve la creación de nuevos espacios diseñados para distintas secciones del sistema.',
        'Cualquier individuo puede suscribirse a StarSeed y formar parte de la comunidad, así como de su constitución, sus derechos, para participar en actividades políticas, educativas, recreativas o de salud. Al suscribirse, se crea una cuenta personal con la información del usuario. Para participar en actividades políticas, cada usuario debe verificar su identidad biometricamente en un "Vereficentro StarSeed", donde se le otorga una identificación oficial física y digital, en estos centros se verifica la supervivencia de cada participante una vez al año. Los usuarios pueden tener múltiples cuentas anónimas o privadas con cualquier nombre para las interacciones culturales, pero solo una cuenta para la participación política y algunos servicios, que debe ser pública.'
      ]
    },
    { 
      title: 'Zonas, Actividades y Productos', 
      content: `Centros Políticos:
- Áreas de autenticación biométrica para la creación de cuentas y verificaciones anuales de supervivencia 
- Computadoras destinadas a la participación política para personas sin acceso a dispositivos móviles 
- Otros servicios relacionados con la organización política legislativa, ejecutiva y judicial.
Escuelas:
- Salones y consultorios, equipados para conferencias, presentaciones, clases y talleres presenciales, donde profesionales guían a individuos y grupos o los grupos se organizan para generar contenido educativo. Algunos de estos se graban, transmiten en vivo y almacenan en un registro en linea. 
- Medios digitales como computadoras, tabletas y lentes de realidad virtual públicos para las clases en línea. - Espacios con herramientas para la creación y estudio de disciplinas diversas, como artes, tecnología, química, biología, física, etc., para grupos o Individuos. 
- Bibliotecas y museos interactivos educativos.
Centros de salud
Servicios personalizados con tecnologias avanzadas y guias de salud, incluyendo: -Consultorias con profesionales como chamanes, curadores, psicólogos, doctores, dentistas, veterinarios, naturistas, etc. que brindan asistencia en temas de salud. Hospitales y servicios de emergencia.
-Zonas de servicios holisticos como acupuntura, reiki, masajes, terapias psicodélicas, energy enhancement system, depravación sensorial, etc.
Viviendas
Viviendas ecológicas autosustentables para familias e Individuos, con recursos y espacios privados y públicos, recreativos y de convivencia, grupos sociales, calendarios de actividades comunitarias. Cada lugar puede determinar si es usado para estancias temporales o permanentes. Los usuarios pueden elegir si quieren tener un estilo de vida relativamente fijo o nómada.
Tiendas de Productos
Ofrecen productos asociados a StarSeed, son ecológicos, sostenibles, saludables, las ganancias son para la construccion del proyecto StarSeed manteniendo comercio justo (mientras se mantenga el comercio capitalista).
Centros recreativos
Espacios dedicados a la interacción social libre, donde se realizan actividades culturales, artísticas y recreativas:
- Exhibiciones de arte temporales y permanentes. - Juegos de mesa y deportes como ping pong, billar, futbolito, entre otros.
-Creación artistica con herramientas a disposición.
- Servicios de alimentos con superalimentos, adaptógenos, nootrópicos y psicoactivos sanos y legales, recomendados por una IA según las caracteristicas individuales del usuario.
Centros Espirituales
- Templos con exposiciones de arte espiritual, tanto permanentes como temporales. Actividades comunitarias espirituales holísticas como meditaciones, vinyasa, pranayamas, sesiones psicodélicas, reiki, pláticas y reuniones espirituales.
Instrumentos públicos afinados a frecuencias espirituales como solfegio y schuman o como cuencos, gongs, campanas, pianos, bocinas con frecuencias binaurales, Isocronicas, playlists espirituales.
- Calendarios y grupos sociales.`
    },
    { 
      title: 'Creación del Primer Espacio', 
      content: 'StarSeed Community: Kavanatom o kannavatom o kavanatomis (cannabis, kanna, kratom, kava)' 
    },
    { 
      title: 'Prospecto', 
      content: `Se iniciará con un espacio social cultural recreativo con un modelo capitalista, ofreciendo un ambiente interactivo y divertido con actividades para atraer a personas que se unan a la comunidad y apoyen el proyecto. El objetivo es recaudar fondos para la construcción de StarSeed para crear y expandir el sistema y construir más espacios, con la intención de evolucionar hacia un modelo comunista en el futuro. 
El primer espacio al comienzo está enfocado principalmente en zonas recreativas donde se incorporan más zonas conforme vayan habiendo posibilidades, el prospecto es empezar con la mejor infraestructura posible en todos los aspectos. Se pide una donación mínima por la entrada y por cada producto y servicio otorgado por la comunidad StarSeed.
La visión es comenzar con un espacio donde se pueda socializar y divertirse, con la mayor cantidad de elementos y actividades recreativas posibles, con mesas y asientos para estar, juegos de mesa, deportes como ping pong, billar, hockey de mesa, futbolito, etc. zona freestyle con música en vivo e instrumentos musicales para jams.
Se organizan eventos de actividades grupales, conferencias, talleres, exposiciones, actividades espirituales como meditaciones y otros yogas. 
El lugar también es un museo con obras temporales distribuidas por todo el lugar, de artistas que quieran solo presentar o vender sus obras con buenos mensajes donde una parte del dinero será donado a StarSeed. 
Hay una tienda de autoservicio de productos StarSeed para llevar o para consumir ahí, se deben tomar y pagar en la caseta de cobro. Todos los productos vienen sellados en empaques ecológicos. Todo tiene información nutricional, de los beneficios, efectos, precauciones, recomendaciones de dosis y ambiente para su consumo. (no se cobra entrada a la tienda si es para llevar)`
    },
  ];

  return (
    <SectionWrapper id="community">
      <SectionTitle>Comunidad StarSeed</SectionTitle>
      {sections.map((section, index) => (
        <Button
          key={index}
          onClick={() => setActiveSection(activeSection === index ? null : index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {section.title}
        </Button>
      ))}
      {activeSection !== null && (
        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{sections[activeSection].title}</h3>
          {Array.isArray(sections[activeSection].content) ? (
            sections[activeSection].content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{sections[activeSection].content}</p>
          )}
        </Content>
      )}
    </SectionWrapper>
  );
};

export default Community;