import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionTitle, ContentGrid, CardContent } from './ContentSection';
import styled from 'styled-components';

const NetworkButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  color: ${props => props.theme.colors.text};
  border: none;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
`;

const NetworkIcon = styled.span`
  font-size: 5rem;
`;

const ExpandedContent = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  overflow-y: auto;
  padding: 2rem;
`;

const CloseButton = styled(motion.button)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: ${props => props.theme.colors.text};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1001;
  backdrop-filter: blur(5px);
  padding: 0;
  line-height: 1;
`;

const ExpandedCardContent = styled(CardContent)`
  max-width: 800px;
  margin: 2rem auto;
  text-align: left;
  padding-top: 60px; // Para dar espacio al botón de cierre
`;

const SocialNetworks = () => {
  const [activeNetwork, setActiveNetwork] = useState(null);

  const networks = [
    {
      name: "Política",
      icon: "🌐", // Mundo con una red
      description: `Red Sociodemocrática (no socialdemocracia); es una plataforma diseñada para la votación y publicación libre de ideas en cualquier formato y transcrito. Sus principales características son: 

      Publicación de Propuestas y federaciones: 
- Las propuestas se publican en entidades federativas oficiales, definidas por la población, que son seccionados por zonas o grupos de participantes y no por nivel de poder. Estas alcanzan el estatus de oficiales cuando la mayoría de los afectados está de acuerdo, asegurando una difusión y organización adecuada de las publicaciones. 
Votación y Comentarios: 
- Los usuarios pueden votar si están de acuerdo o desacuerdo en las publicaciones o comentarios, incluyendo en el tiempo necesario para la fecha limite de las publicaciones. 
- El sistema notifica a entidades federativas e individuos afectados por las propuestas, asegurando una comunicación efectiva y participación inclusiva. 
Opinión de Expertos: 
- Se busca la opinión de expertos que pueden solicitar dar su opinión si no pertenecen a la entidad federativa, quienes pueden tener insignias o certificados en sus perfiles, reconociendo su sabiduría en el tema y mejorando la calidad del debate.
Seguimiento y Copias: 
- Los usuarios pueden seguir a partidos políticos, grupos o individuos para replicar sus votos en una sección de “copiados” o a entidades federativas para ver sus propuestas en una sección de "seguidos". 
- En caso de conflicto entre varios partidos, grupos o individuos cuyos votos se han copiado, el sistema cancela y notifica dichos conflictos, manteniendo la integridad del proceso de votación. 
Transparencia: 
- Todos los votos se publican públicamente y se verifica la existencia de cada participante de forma anual en vereficentros StsrSeed para asegurar la veracidad de la información, la confianza en el proceso y evitar hackeos. 
Recomendaciones de IA: 
- Utiliza inteligencia artificial (IA) programada con la constitución StarSeed, la información de los recursos y el contexto para ofrecer recomendaciones que promuevan las mejores decisiones en favor de la paz, asegurando que las decisiones tomadas beneficien al mayor número de personas y mantengan la armonía social ecológica y sustentable. 
La Red Sociodemocrática está diseñada para fomentar una participación activa y transparente en la toma de decisiones, apoyada por tecnología avanzada, una comunidad de expertos y ciudadanos comprometidos. 

El sistema se organiza en tres secciones/poderes principales: 
1. Legislativo:
 - Publicación y votación de decisiones en un formato libre y transcrito.
 - Permite a los ciudadanos participar activamente en la organización política, social, cultural, de recursos; como creación, organización, modificación, mantenimiento de espacios, leyes, productos, servicios, eventos, nombres regionales, asegurando que todas las opiniones sean consideradas. 
2. Ejecutivo: 
- Facilita la implementación efectiva de las decisiones tomadas en la sección legislativa, asegurando una gestión eficiente y transparente. Con tecnología avanzada como automatización de los medios de producción, extracción y manejo de recursos ecológica sustentable con inteligencia artificial, robots y la ayuda de voluntarios. 
- Incluye la organización de medios de producción y servicios públicos con herramientas de organización e información, tales como mapas, datos de recursos, códigos de programación, sistemas de comunicación, organización y búsqueda de voluntarios, calendarios. 
3. Judicial: 
- Juicio de actos en tres niveles: moral, ético y universal. Buscando ayudar evitando discriminar, excluir, vengar o castigar. 
- Los juicios son publicados y votados por voluntarios, promoviendo la justicia participativa y comunitaria. 
- Esta sección asegura que las acciones y decisiones sean evaluadas desde múltiples perspectivas, garantizando la equidad y la justicia en todos los niveles de la sociedad. 
Cada sección trabaja de manera integrada para crear un sistema democrático robusto y transparente, donde la participación inclusiva y el uso de tecnología avanzada se combinan para fomentar una sociedad justa, equitativa, prospera, auto sustentable y pacífica.`
    },
    {
      name: "Educación",
      icon: "📖", // Libro
      description: `Red Socioeducativa libre y accesible, organizada por categorías, donde toda la información es confiable y verificable. Sus principales características incluyen: 

      Clases Guiadas y Artículos:
 - Clases dirigidas por profesionales expertos en diversas materias y por IA entrenadas. 
- Artículos y clases con recomendaciones (no restricciones) de conocimientos previos necesarios para entender mejor el contenido. 
- Opción de obtener certificados e insignias al completar exámenes, validando así el aprendizaje, estas se muestran en los perfiles. 
Noticias: 
- Sección de noticias que se categoriza en entidades federativas, zonas, temas o recomendaciones personales, cualquier persona o grupo puede publicar artículos de noticias en cualquier sección y toda información debe ser verificada, se puede seguir cualquier categoría, grupo o persona para recibir sus noticias publicadas. 
Herramientas Avanzadas: 
- Acceso a inteligencia artificial (IA) entrenada con información comprobada y con cada contexto individual para garantizar precisión y relevancia.
Herramientas Avanzadas: 
- Acceso a inteligencia artificial (IA) entrenada con información comprobada actualizada, acceso a internet y con cada contexto individual para garantizar precisión y relevancia, esta se puede utilizar en toda la plataforma y es un asistente virtual personalizado entrenado con los valores de la constitución StarSeed.
- Sección de recomendaciones de orientación vocacional, incluyendo guías para la salud corporal, emocional y espiritual, ayudando a los usuarios a encontrar su camino profesional y personal, con la IA incorporada. 
Creación de Grupos de Estudio: 
- Facilita la formación de grupos de estudio presenciales y digitales para promover entornos de aprendizaje colaborativos y comunitarios. 
Modificación democrática: 
- Permite a los usuarios proponer modificaciones del diagrama categórico de información, noticias, nuevos artículos, clases o guías en cada sección de las categorías o grupo, asegurando que la red se mantenga actualizada y relevante integrando el sistema legislativo. 

La Red Socioeducativa está diseñada para proporcionar una educación de alta calidad y fomentar el aprendizaje continuo, apoyado por tecnología avanzada y una comunidad educativa activa y comprometida, ayudando a tomar buena desiciones en el sistema político, comunidades saludables y mejorar la calidad de vida.`
    },
    {
      name: "Cultura",
      icon: "🎨", // Paleta de pintura
      description: `Red Sociocultural; es una plataforma dinámica que permite la publicación de contenido y la creación de perfiles con formato libre, manteniendo siempre el respeto y la veracidad. Sus principales características son: 

      Opciones de Privacidad y Permanencia:
- Los usuarios pueden elegir si su contenido es público o privado.
- El contenido puede ser temporal, como en el caso de historias, o permanente, en portafolios. 
Perfiles Diversos: 
- Creación ilimitada de perfiles para individuos o grupos, facilitando una amplia gama de interacciones y colaboraciones. 
Interacción y Comentarios: 
- Los usuarios pueden comentar en publicaciones y comentarios en cualquier formato, fomentando la comunicación y el intercambio de ideas. 
- El contenido se puede filtrar de diversas formas como relevancia, popularidad, cercanía, personalizado. 
- Se puden usar hashtags, links o apps en publicaciones, comentarios y mensajes.
Mapas y Actividades: 
- Mapas interactivos donde los usuarios pueden crear publicaciones sobre actividades, espacios recreativos, eventos sociales y culturales. 
- Incluye calendarios y herramientas democráticas para la organización y seguimiento de eventos públicos con opción de privados para zonas privadas. 
Democracia Geográfica: 
- Los usuarios pueden votar por el nombre, la delimitación o tiempo de eventos temporales, entidades federativas o la toponimia (nombramiento de zonas geográficas), integrando el sistema legislativo para una mayor participación comunitaria, respeto y democracia geográfica. Recomendaciones Personalizadas: 
- Opción de usar inteligencia artificial personalizada con la Información de cada usuario para simular interacciones en diferentes contextos con contenido y otras páginas y con los resultados busca la mejor resonancia, armonía y compatibilidad, ofreciendo recomendaciones de amistades, eventos y contenido en una sección dedicada a “recomendaciones”. 

La Red Sociocultural está diseñada para enriquecer la vida comunitaria y cultural, proporcionando herramientas que permiten la libre expresión y la organización de actividades sociales, todo dentro de un marco de respeto y paz.`
    }
  ];

  return (
    <SectionWrapper id="social-networks">
      <SectionTitle>Redes Sociales Digitales</SectionTitle>
      <ContentGrid>
        {networks.map((network, index) => (
          <NetworkButton
            key={index}
            onClick={() => setActiveNetwork(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NetworkIcon>{network.icon}</NetworkIcon>
          </NetworkButton>
        ))}
      </ContentGrid>
      <AnimatePresence>
        {activeNetwork !== null && (
          <ExpandedContent
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton
              onClick={() => setActiveNetwork(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </CloseButton>
            <ExpandedCardContent>
              <SectionTitle>{networks[activeNetwork].name}</SectionTitle>
              <CardContent style={{ whiteSpace: 'pre-line' }}>
                {networks[activeNetwork].description}
              </CardContent>
            </ExpandedCardContent>
          </ExpandedContent>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default SocialNetworks;