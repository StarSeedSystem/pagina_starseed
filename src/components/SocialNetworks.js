import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionTitle, ContentGrid, ContentCard, CardTitle, CardContent } from './ContentSection';
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
      description: `Red Sociodemocrática; es una plataforma diseñada para la votación y publicación libre de ideas en cualquier formato interpretable por cualquier medio y transcrito. Sus principales características son:

Publicación de Propuestas:
- Las propuestas se publican en entidades federativas oficiales, definidas por la población y que alcanzan el estatus de oficiales cuando la mayoría de los afectados está de acuerdo, asegurando una difusión adecuada de las ideas.

Votación y Comentarios:
- Los usuarios pueden votar a favor o en desacuerdo con las publicaciones o comentarios, incluyendo en el tiempo necesario para tomar decisiones.
- El sistema notifica a grupos sociales, individuos y partidos políticos afectados por las propuestas, asegurando una comunicación efectiva y participación inclusiva.

Opinión de Expertos:
- Se busca la opinión de expertos, quienes pueden tener insignias o certificados en sus perfiles, reconociendo su sabiduría en el tema y mejorando la calidad del debate.

Seguimiento y Transparencia:
- Los usuarios pueden seguir a entidades federativas para recibir notificaciones sobre nuevas propuestas y a partidos políticos o individuos para replicar sus votos o ver sus propuestas en una sección de "seguidos".
- Los votos se publican públicamente para asegurar la transparencia de la información y la confianza en el proceso.

Gestión de Conflictos:
- En caso de conflicto entre varios partidos o individuos cuyos votos se han copiado, el sistema cancela y notifica dichos conflictos, manteniendo la integridad del proceso de votación.

Recomendaciones de IA:
- Utiliza inteligencia artificial (IA) para ofrecer recomendaciones que promuevan las mejores decisiones en favor de la paz, asegurando que las decisiones tomadas beneficien al mayor número de personas y mantengan la armonía social.

El sistema se organiza en tres secciones principales:

1. Legislativo:
- Publicación y votación de decisiones en un formato libre y transcrito.
- Permite a los ciudadanos participar activamente en la creación y modificación de leyes y políticas, asegurando que todas las voces sean escuchadas.

2. Ejecutivo:
- Ejecución de decisiones con la ayuda de tecnología avanzada, robots y voluntarios.
- Incluye herramientas de organización e información, tales como mapas, datos de recursos, códigos de programación, sistemas de organización de voluntarios y calendarios.
- Facilita la implementación efectiva de las decisiones tomadas en la sección legislativa, asegurando una gestión eficiente y transparente.

3. Judicial:
- Juicio de actos en tres niveles: moral, ético y universal. Buscando ayudar en vez de excluir.
- Los juicios son publicados y votados por voluntarios, promoviendo la justicia participativa y comunitaria.
- Esta sección asegura que las acciones y decisiones sean evaluadas desde múltiples perspectivas, garantizando la equidad y la justicia en todos los niveles de la sociedad.

Cada sección trabaja de manera integrada para crear un sistema democrático robusto y transparente, donde la participación ciudadana y el uso de tecnología avanzada se combinan para fomentar una sociedad justa y equitativa.`
    },
    {
      name: "Educación",
      icon: "📖", // Libro
      description: `Red Socioeducativa libre y accesible, organizada por categorías, donde toda la información es confiable y verificable. Sus principales características incluyen:

Clases Guiadas y Artículos:
- Clases dirigidas por profesionales expertos en diversas materias y por IA entrenadas.
- Artículos y clases con recomendaciones (no restricciones) de conocimientos previos necesarios para entender mejor el contenido.
- Opción de obtener certificados e insignias al completar exámenes, validando así el aprendizaje, estas se muestran en los perfiles.

Herramientas Avanzadas:
- Acceso a inteligencia artificial (IA) entrenada con información comprobada y con cada contexto individual para garantizar precisión y relevancia.
- Sección de recomendaciones de orientación vocacional, incluyendo guías para la salud corporal, emocional y espiritual, ayudando a los usuarios a encontrar su camino profesional y personal.

Creación de Grupos de Estudio:
- Facilita la formación de grupos de estudio presenciales y digitales para promover entornos de aprendizaje colaborativos.

Sección de Propuestas:
- Permite a los usuarios proponer modificaciones del diagrama categórico de información, nuevos artículos, clases o guías en cada sección de las categorías o grupo, asegurando que la red se mantenga actualizada y relevante integrando el sistema legislativo.

La Red Socioeducativa está diseñada para proporcionar una educación de alta calidad y fomentar el aprendizaje continuo, apoyado por tecnología avanzada y una comunidad educativa activa y comprometida.`
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
- Los usuarios pueden comentar en publicaciones y comentarios, fomentando la comunicación y el intercambio de ideas.

Mapas y Actividades:
- Mapas interactivos donde los usuarios pueden crear publicaciones sobre actividades, espacios recreativos, eventos sociales y culturales.
- Incluye calendarios para la organización y seguimiento de eventos.

Participación Comunitaria:
- Los usuarios pueden votar por el nombre y la delimitación de eventos temporales y lugares geográficos permanentes, integrando el sistema legislativo para una mayor participación comunitaria.

Recomendaciones Personalizadas:
- Utiliza inteligencia artificial (IA) entrenada con cada personalidad para simular interacciones con contenido y otras páginas.
- La IA busca la mejor resonancia y compatibilidad, ofreciendo recomendaciones de amistades y contenido en una sección dedicada a "recomendaciones".

La Red Sociocultural está diseñada para enriquecer la vida comunitaria y cultural, proporcionando herramientas que permiten la libre expresión y la organización de actividades sociales, todo dentro de un marco de respeto y veracidad.`
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