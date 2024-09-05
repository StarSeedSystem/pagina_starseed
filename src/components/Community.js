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
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 30px;
`;

const Content = styled(motion.div)`
  margin-top: 1rem;
`;

const Community = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { 
      title: 'Propósito', 
      content: 'La creación de espacios sociales presenciales donde se implementa el sistema de la Fundación StarSeed. Estos espacios integran áreas educativas, artísticas, recreativas, de salud, viviendas y organización política, con el objetivo de fomentar entornos pacíficos, autosuficientes, ecológicos, libres, saludables, divertidos, sociales y comunitarios.' 
    },
    { 
      title: 'Plan Social', 
      content: 'Para la fomentación estable del sistema StarSeed en la sociedad es necesario empezar por la red sociocultural, para crear espacios y juntar recursos sociales y económicos para crear la red socioeducativa y así ayudar a formar bases conscientes coherentes en las perspectivas para que cuando se participe en la red sociopolítica se tomen decisiones pacíficas con base a buena educación e información verídica accesible.' 
    },
    { 
      title: 'Plan Económico', 
      content: 'El proyecto comienza bajo un modelo capitalista, solicitando una donación mínima por cada entrada, producto o servicio ofrecido por la fundación y sus miembros, quienes reciben un salario fijo. Una vez que la comunidad alcanza la capacidad de producir bienes y servicios de manera abundante, sostenible y ecológica, el sistema se transforma en un modelo comunista. En esta etapa, todo es gratuito, y los servicios son proporcionados por voluntarios con la ayuda de tecnologías avanzadas, como la inteligencia artificial y robots, que eventualmente se encargan de las tareas más laboriosas.' 
    },
    { 
      title: 'Suscripciones y Asociaciones', 
      content: 'Grupos e individuos pueden asociarse o suscribirse al sistema StarSeed. La constitución de StarSeed se aplica a cualquier comunidad que la acepte y pueda ofrecer comunidad, espacios, productos o servicios alineados con los principios de StarSeed. Además, se promueve la creación de nuevos espacios diseñados para distintas secciones del sistema. Cualquier individuo puede suscribirse a StarSeed y formar parte de la comunidad, así como de su constitución, para participar en actividades políticas, educativas o recreativas. Al suscribirse, se crea una cuenta personal con la información del usuario. Para participar en actividades políticas, cada usuario debe verificar su identidad biometricamente en un "Centro de Verificación StarSeed", donde se le otorga una identificación física y digital. Los usuarios pueden tener múltiples cuentas anónimas o privadas con cualquier nombre, pero solo una cuenta para la participación política que debe ser pública.' 
    },
    { 
      title: 'Zonas, Actividades y Productos', 
      content: 'Las principales zonas que puede contener cada espacio o asociación StarSeed incluyen: 1. Zonas Políticas, 2. Escuelas, 3. Zonas de Salud, 4. Viviendas, 5. Tiendas de Productos, 6. Zonas Recreativas, y 7. Zona Espiritual. Cada zona tiene características específicas y servicios diseñados para fomentar la comunidad y el desarrollo personal y colectivo.' 
    },
    { 
      title: 'Creación del Primer Espacio', 
      content: 'StarSeed Community: Kavanatom o kannavatom o kavanatomis (cannabis, kanna, kratom, kava)' 
    },
    { 
      title: 'Prospecto', 
      content: 'Se iniciará con un espacio social recreativo con un modelo capitalista, ofreciendo un ambiente interactivo y divertido con actividades para atraer a personas que se unan a la comunidad y apoyen el proyecto. El objetivo es recaudar fondos para la fundación StarSeed para crear y expandir el sistema y construir más espacios, con la intención de evolucionar hacia un modelo comunista en el futuro. El primer espacio al comienzo está enfocado principalmente en zonas recreativas donde se incorporan más zonas conforme vayan habiendo posibilidades, el prospecto es empezar con la mejor infraestructura posible en todos los aspectos.' 
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
          <p>{sections[activeSection].content}</p>
        </Content>
      )}
    </SectionWrapper>
  );
};

export default Community;