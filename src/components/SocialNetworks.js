import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionTitle, ContentGrid, CardContent } from './ContentSection';
import styled from 'styled-components';
import politicaBoton from '../assets/imagenes/red_social/politica/boton.png';
import educacionBoton from '../assets/imagenes/red_social/educacion/boton.png';
import culturaBoton from '../assets/imagenes/red_social/cultura/boton.png';
import politicaInterno from '../assets/imagenes/red_social/politica/interno.png';
import educacionInterno from '../assets/imagenes/red_social/educacion/interno.png';
import culturaInterno from '../assets/imagenes/red_social/cultura/interno.png';

const NetworkButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 1rem;
  img {
    width: 200px;
    height: auto;
    border-radius: 50%;
    border: 4px solid ${props => props.theme.colors.primary};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 30px rgba(76, 209, 255, 0.7);
    }
  }
`;

const ExpandedContent = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  background: rgba(10, 25, 47, 0.85);
  padding: 3rem;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.colors.primary};
  max-height: 90vh;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
  }

  h4 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
  }

  p, ul {
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  overflow-y: auto;
  padding-right: 1.5rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExpandedImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 70vh;
  border-radius: 15px;
  object-fit: contain;
`;

const SocialNetworks = () => {
  const [activeNetwork, setActiveNetwork] = useState(null);

  const networks = [
    {
      name: "Política",
      buttonImg: politicaBoton,
      internalImg: politicaInterno,
      description: (
        <>
          <h3>Política: La Red democrática</h3>
          <p>La Red democrática es una plataforma dedicada a la votación y publicación libre de ideas. Sus principales características incluyen:</p>
          <h4>1. Publicación de Propuestas y Federaciones</h4>
          <ul>
            <li><strong>Entidades Federativas Dinámicas:</strong> Las propuestas se publican en entidades federativas oficiales, definidas democráticamente por la población y segmentadas por zonas o grupos de participantes, no por niveles de poder preestablecidos.</li>
            <li><strong>Estatuto Oficial de Propuestas:</strong> Las propuestas alcanzan el estatus de oficiales cuando la mayoría de los afectados está de acuerdo.</li>
          </ul>
          <h4>2. Votación y Comentarios</h4>
          <ul>
            <li><strong>Participación Inclusiva:</strong> Los usuarios pueden votar a favor o en contra de publicaciones o comentarios, incluyendo el establecimiento de fechas límite.</li>
            <li><strong>Notificaciones Efectivas:</strong> El sistema notifica a las entidades federativas e individuos afectados por las propuestas.</li>
          </ul>
          <h4>3. Opinión de Expertos</h4>
          <ul>
            <li><strong>Colaboración Interdisciplinaria:</strong> Se busca activamente la opinión de expertos.</li>
            <li><strong>Reconocimiento Profesional:</strong> Los expertos pueden compartir insignias o certificados.</li>
          </ul>
          <h4>4. Seguimiento y Copias</h4>
          <ul>
            <li><strong>Replicación de Votos:</strong> Los usuarios pueden seguir a partidos, grupos o individuos para replicar sus votos.</li>
            <li><strong>Monitoreo de Propuestas:</strong> También pueden seguir a entidades federativas.</li>
            <li><strong>Gestión de Conflictos:</strong> El sistema cancela y notifica conflictos en votos copiados.</li>
          </ul>
          <h4>5. Transparencia y Seguridad</h4>
          <ul>
            <li><strong>Publicación de Votos:</strong> Todos los votos son públicos.</li>
            <li><strong>Verificación de Identidad:</strong> Verificación anual en centros StarSeed.</li>
          </ul>
          <h4>6. Recomendaciones de Inteligencia Artificial</h4>
          <ul>
            <li><strong>Asesoramiento Ético y Legal:</strong> La IA ofrece recomendaciones basadas en la Constitución StarSeed.</li>
            <li><strong>Análisis de Impacto:</strong> La IA proporciona análisis sobre el impacto potencial de las propuestas.</li>
          </ul>
          <h3>Organización en Tres Poderes</h3>
          <h4>1. Legislativo</h4>
          <p>Participación ciudadana directa en la creación y modificación de leyes, políticas y regulaciones.</p>
          <h4>2. Ejecutivo</h4>
          <p>Implementación eficiente de decisiones con tecnología avanzada y colaboración de voluntarios.</p>
          <h4>3. Judicial</h4>
          <p>Justicia restaurativa y participativa con juicios públicos y votados por voluntarios calificados.</p>
        </>
      )
    },
    {
      name: "Educación",
      buttonImg: educacionBoton,
      internalImg: educacionInterno,
      description: (
        <>
          <h3>Educación: Red Socioeducativa</h3>
          <p>Plataforma libre y accesible, con información confiable y verificable. Sus características incluyen:</p>
          <h4>1. Navegador Web Inteligente</h4>
          <p>IA personalizable que guía a los usuarios a recursos verificados.</p>
          <h4>2. Clases Guiadas y Artículos</h4>
          <p>Clases por expertos y IA, con currículo personalizado y certificación opcional.</p>
          <h4>3. Noticias y Actualizaciones</h4>
          <p>Sección de noticias verificadas con participación comunitaria.</p>
          <h4>4. Herramientas Avanzadas</h4>
          <p>Asistente virtual personalizado integrado en toda la plataforma.</p>
          <h4>5. Orientación Vocacional y Bienestar</h4>
          <p>Guías para el desarrollo integral y apoyo personalizado.</p>
          <h4>6. Creación de Grupos de Estudio</h4>
          <p>Facilita el aprendizaje colaborativo presencial y digital.</p>
          <h4>7. Modificación Democrática</h4>
          <p>Permite proponer modificaciones al contenido educativo.</p>
        </>
      )
    },
    {
      name: "Cultura",
      buttonImg: culturaBoton,
      internalImg: culturaInterno,
      description: (
        <>
          <h3>Cultura: Red Sociocultural</h3>
          <p>Plataforma dinámica que enriquece la vida comunitaria y cultural. Sus características son:</p>
          <h4>1. Opciones de Privacidad y Permanencia</h4>
          <p>Control total del usuario sobre la privacidad y duración de su contenido.</p>
          <h4>2. Perfiles Diversos y Grupos</h4>
          <p>Creación de múltiples perfiles y unión a comunidades con intereses específicos.</p>
          <h4>3. Interacción, Formatos y Comentarios</h4>
          <p>Experiencias en 2D, Realidad Aumentada (AR) y Realidad Virtual (VR).</p>
          <h4>4. Mapas y Actividades</h4>
          <p>Exploración y organización de eventos y actividades locales y globales.</p>
          <h4>5. Democracia Geográfica</h4>
          <p>Participación en la definición de espacios públicos y eventos.</p>
          <h4>6. Recomendaciones Personalizadas</h4>
          <p>IA que sugiere interacciones, amistades y contenido basado en afinidades.</p>
        </>
      )
    }
  ];

  return (
    <SectionWrapper id="social-networks">
      <SectionTitle>La Red StarSeed: Transhumanismo</SectionTitle>
      <p style={{ textAlign: 'center', maxWidth: '900px', margin: '1rem auto', fontSize: '1.8rem', lineHeight: '1.6' }}>
        La Red StarSeed es una plataforma social integral diseñada para fomentar la participación activa, transparente y democrática en todos los aspectos de la sociedad. Dividida en tres secciones principales—Política, Educación y Cultura—esta red utiliza tecnología avanzada, inteligencia artificial y una comunidad comprometida de expertos y ciudadanos para construir una sociedad más justa, equitativa, sostenible y pacífica.
      </p>
      <ContentGrid>
        {networks.map((network, index) => (
          <NetworkButton
            key={index}
            onClick={() => setActiveNetwork(index)}
            whileTap={{ scale: 0.95 }}
          >
            <img src={network.buttonImg} alt={network.name} />
          </NetworkButton>
        ))}
      </ContentGrid>
      <AnimatePresence>
        {activeNetwork !== null && (
          <ExpandedContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CloseButton onClick={() => setActiveNetwork(null)} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
              &times;
            </CloseButton>
            <ExpandedCardContent>
              <TextContainer>{networks[activeNetwork].description}</TextContainer>
              <ImageContainer>
                <ExpandedImage src={networks[activeNetwork].internalImg} alt={networks[activeNetwork].name} />
              </ImageContainer>
            </ExpandedCardContent>
          </ExpandedContent>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default SocialNetworks;