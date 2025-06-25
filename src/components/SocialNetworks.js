import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionTitle, ContentGrid } from './ContentSection';
import styled from 'styled-components';
import politicaBoton from '../assets/imagenes/red_social/politica/boton.png';
import educacionBoton from '../assets/imagenes/red_social/educacion/boton.png';
import culturaBoton from '../assets/imagenes/red_social/cultura/boton.png';
import politicaInterno from '../assets/imagenes/red_social/politica/interno.png';
import educacionInterno from '../assets/imagenes/red_social/educacion/interno.png';
import culturaInterno from '../assets/imagenes/red_social/cultura/interno.png';

const MainDescription = styled.p`
  text-align: center;
  max-width: 900px;
  margin: 1rem auto;
  font-size: 1.8rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const ButtonTitle = styled.span`
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.lightText};
  font-size: 1.2rem;
  text-align: center;
`;

const NetworkButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      width: 120px;
      height: 120px;
    }

    @media (max-width: 480px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const ExpandedContent = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  overflow-y: auto; /* Enable scrolling */
  padding: 0;
  
  @media (max-width: 768px) {
    align-items: flex-start; /* Align to top on mobile */
  }
  
  @media (min-width: 769px) {
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: fixed;
  top: 2rem;
  right: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`;

const ExpandedCardContent = styled.div`
  position: relative;
  width: 95%;
  max-width: 1200px;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: auto; /* Center horizontally */
  
  @media (min-width: 769px) {
    height: 90vh; /* Only restrict height on desktop */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    border-radius: 0;
    padding: 1rem;
    padding-top: 3rem;
    min-height: 100%; /* Fill screen height */
    height: auto; /* Allow to expand with content */
    margin: 0; /* No margin on mobile */
  }

  h3 { 
    font-size: 2.2rem; 
    margin-bottom: 1.5rem; 
    color: ${props => props.theme.colors.primary};

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  h4 { 
    font-size: 1.8rem; 
    margin-top: 2rem; 
    margin-bottom: 0.8rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  p, ul { 
    margin-bottom: 1rem;
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  li { 
    margin-bottom: 0.5rem;
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

const TextContainer = styled.div`
  flex: 2;
  height: 100%;
  overflow-y: auto;
  padding-right: 1.5rem;

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.4); border-radius: 4px; }
  &::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.6); }

  @media (max-width: 768px) {
    order: 2;
    padding-right: 0;
    flex: 1 1 auto;
    max-height: none; /* Don't restrict height */
    overflow-y: visible; /* Content flows naturally */
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    order: 1;
    flex: 0 0 auto; /* Don't grow, don't shrink */
    max-height: 30vh; /* Reduce max height of image container */
    padding-top: 0.5rem; /* Add a bit of space at the top */
  }
`;

const ExpandedImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 80%;
  border-radius: 15px;
  object-fit: contain;
`;

const SocialNetworks = () => {
  const [activeNetwork, setActiveNetwork] = useState(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (activeNetwork !== null) {
      // Only prevent body scroll on desktop, mobile needs to scroll the modal content
      if (window.innerWidth > 768) {
        document.body.style.overflow = 'hidden';
      }
      
      const timer = setTimeout(() => {
        if (textRef.current) {
          textRef.current.scrollTop = 0;
        }
      }, 0);

      return () => {
        document.body.style.overflow = 'unset';
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeNetwork]);

  const handleNetworkClick = (index) => {
    // Primero, nos aseguramos de que la sección esté a la vista.
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Luego, abrimos el modal.
    setActiveNetwork(index);
  };

  const networks = [
    {
      name: "Política",
      buttonImg: politicaBoton,
      internalImg: politicaInterno,
      description: (
        <>
          <h3>Política: La Red democrática</h3>
          <MainDescription data-component-name="SocialNetworks">La Red democrática es una plataforma dedicada a la votación y publicación libre de ideas. Sus principales características incluyen:</MainDescription>
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
            <li><strong>Identidad Verificada:</strong> La verificación de identidad es opcional pero necesaria para votar en propuestas oficiales.</li>
            <li><strong>Privacidad y Anonimato:</strong> Los usuarios pueden mantener el anonimato si lo desean.</li>
          </ul>
          <p>Esta red utiliza tecnología avanzada, inteligencia artificial y una comunidad comprometida de expertos y ciudadanos para construir una sociedad más justa, sostenible y pacífica.</p>
        </>
      ),
    },
    {
      name: "Educación",
      buttonImg: educacionBoton,
      internalImg: educacionInterno,
      description: (
        <>
          <h3>Educación: Red de Conocimiento</h3>
          <p>Plataforma educativa que integra el conocimiento en un sistema dinámico y accesible. Sus características clave son:</p>
          <h4>1. Integración de Contenidos</h4>
          <p>Conexión de información de diversas fuentes en un formato unificado y fácil de navegar.</p>
          <h4>2. Rutas de Aprendizaje Personalizadas</h4>
          <p>Algoritmos de IA que adaptan los planes de estudio a las necesidades individuales.</p>
          <h4>3. Gamificación y Realidad Extendida</h4>
          <p>Experiencias de aprendizaje inmersivas a través de juegos, AR y VR.</p>
          <h4>4. Contribución y Validación</h4>
          <p>Los usuarios pueden añadir y validar contenido, fomentando una comunidad de aprendizaje colaborativa.</p>
          <h4>5. Foros y Debates</h4>
          <p>Espacios para la discusión y el intercambio de ideas, con moderación para asegurar un ambiente constructivo.</p>
          <h4>6. Proyectos y Desafíos</h4>
          <p>Aplicación práctica del conocimiento a través de proyectos y desafíos del mundo real.</p>
        </>
      ),
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
      ),
    },
  ];

  return (
    <SectionWrapper id="social-networks" ref={sectionRef}>
      <SectionTitle>La Red StarSeed: Transhumanismo</SectionTitle>
      <p style={{ textAlign: 'center', maxWidth: '900px', margin: '1rem auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
        La Red StarSeed es una plataforma social integral diseñada para fomentar la participación activa, transparente y democrática en todos los aspectos de la sociedad. Dividida en tres secciones principales—Política, Educación y Cultura—esta red utiliza tecnología avanzada, inteligencia artificial y una comunidad comprometida de expertos y ciudadanos para construir una sociedad más justa, equitativa, sostenible y pacífica.
      </p>
      <ContentGrid>
        {networks.map((network, index) => (
          <ButtonContainer key={index}>
            <NetworkButton
              onClick={() => handleNetworkClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={network.name}
            >
              <img 
                src={network.buttonImg} 
                alt={network.name} 
                title={network.name}
              />
            </NetworkButton>
            <ButtonTitle>{network.name}</ButtonTitle>
          </ButtonContainer>
        ))}
      </ContentGrid>
      <AnimatePresence>
        {activeNetwork !== null && (
          // La capa de fondo que ocupa toda la pantalla
          <ExpandedContent
            initial={{ y: "-100vh", opacity: 0 }} /* Animación desde arriba */
            animate={{ y: "0vh", opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }} /* Transición suave */
          >
            {/* Botón de cierre anclado a la pantalla, fuera de la tarjeta de contenido */}
            <CloseButton onClick={() => setActiveNetwork(null)} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
              &times;
            </CloseButton>

            {/* La tarjeta que contiene el texto y la imagen */}
            <ExpandedCardContent>
              <TextContainer ref={textRef}>
                {networks[activeNetwork].description}
              </TextContainer>
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