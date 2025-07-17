import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionTitle, ContentGrid } from './ContentSection';
import styled from 'styled-components';

// Import images
import politicaBoton from '../assets/nuevas_imagenes/5 Red social/1 politica/boton.png';
import educacionBoton from '../assets/nuevas_imagenes/5 Red social/2 educacion/boton.png';
import culturaBoton from '../assets/nuevas_imagenes/5 Red social/3 cultura/boton.png';
import mainButtonImg from '../assets/nuevas_imagenes/5 Red social/boton principal.png';
import politicaInterno1 from '../assets/nuevas_imagenes/5 Red social/1 politica/interno.png';
import educacionInterno1 from '../assets/nuevas_imagenes/5 Red social/2 educacion/interno.png';
import culturaInterno1 from '../assets/nuevas_imagenes/5 Red social/3 cultura/interno.png';

const SocialNetworksWrapper = styled(SectionWrapper)`
  position: relative;
  overflow: hidden;
`;

const NetworkButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  ${({ isMain }) => isMain ? `
    width: 60vw;
    max-width: 450px;
    margin: 0 auto 2rem;

    @media (max-width: 768px) {
      width: 80vw;
    }
  ` : `
    width: 250px;
    height: 250px;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }

    @media (max-width: 480px) {
      width: 150px;
      height: 150px;
    }
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ButtonTitle = styled.h3`
  margin-top: 1rem;
  color: ${props => props.theme.colors.lightText};
  font-size: 1.2rem;
`;

const MainDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: ${props => props.theme.colors.lightText};
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ExpandedContent = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #e0e0e0;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
  z-index: 10;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    color: #007bff;
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    width: 35px;
    height: 35px;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 8px;
    font-size: 1.25rem;
    width: 30px;
    height: 30px;
  }
`;

const ExpandedCardContent = styled(motion.div)`
  background: rgba(26, 26, 26, 0.15);
  padding: 2.5rem;
  border-radius: 70px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 5px 20px rgba(0,0,0,0.4);
  border: 1px solid rgba(0, 170, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin: auto;
  
  @media (max-width: 1024px) {
    width: 95%;
    max-width: 800px;
    padding: 2rem;
    border-radius: 50px;
  }

  @media (max-width: 768px) {
    width: 98%;
    max-width: 100%;
    padding: 1.5rem;
    border-radius: 40px;
    max-height: 95vh;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    border-radius: 20px;
    max-height: 98vh;
    margin: 0;
  }

  @media (max-width: 360px) {
    padding: 0.75rem;
    border-radius: 15px;
  }

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-thumb { background-color: #007bff; border-radius: 4px; }
  &::-webkit-scrollbar-track { background-color: #2c2c54; }
`;

const ModalTextContainer = styled.div`
  &:after { content: ""; display: table; clear: both; }

  h3 { color: #00aaff; font-size: 1.8rem; margin-bottom: 1rem; text-align: center; }
  h4 { color: #50c878; font-size: 1.4rem; margin-top: 1.5rem; margin-bottom: 0.5rem; }
  p, li { font-size: 1.1rem; line-height: 1.7; margin-bottom: 1rem; text-align: justify; }
  ul { list-style-position: inside; padding-left: 0; }
  strong { color: #ffeb3b; }
`;

const ModalImage = styled.img`
  width: 450px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  
  &.float-left { float: left; margin: 0 1.5rem 1rem 0; }
  &.float-right { float: right; margin: 0 0 1rem 1.5rem; }

  @media (max-width: 768px) {
    float: none;
    display: block;
    margin: 1.5rem auto;
    width: 100%;
    max-width: 450px;
  }
`;

const SocialNetworks = ({ id }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [activeNetwork, setActiveNetwork] = useState(null);
  const sectionRef = useRef(null);

  const networks = [
    {
      name: "Política",
      buttonImg: politicaBoton,
      images: [politicaInterno1],
      description: (
        <ModalTextContainer>
          <h3>Política: La Red democrática</h3>
          <ModalImage src={politicaInterno1} alt="Democracia" className="float-left" />
          <p>La Red democrática es una plataforma dedicada a la votación y publicación libre de ideas. Sus principales características incluyen:</p>
          <h4>1. Publicación de Propuestas y Federaciones</h4>
          <ul>
            <li><strong>Entidades Federativas Dinámicas:</strong> Las propuestas se publican en entidades federativas oficiales, definidas democráticamente por la población y segmentadas por zonas o grupos de participantes.</li>
            <li><strong>Estatuto Oficial de Propuestas:</strong> Las propuestas alcanzan el estatus de oficiales cuando la mayoría de los afectados está de acuerdo.</li>
          </ul>
          <h4>2. Votación y Comentarios</h4>
          <ul>
            <li><strong>Participación Inclusiva:</strong> Los usuarios pueden votar a favor o en contra de publicaciones o comentarios.</li>
            <li><strong>Notificaciones Efectivas:</strong> El sistema notifica a las entidades federativas e individuos afectados por las propuestas.</li>
          </ul>
          <h4>3. Opinión de Expertos</h4>
          <ul>
            <li><strong>Colaboración Interdisciplinaria:</strong> Se busca activamente la opinión de expertos.</li>
            <li><strong>Reconocimiento Profesional:</strong> Los expertos pueden compartir insignias o certificados.</li>
          </ul>
        </ModalTextContainer>
      ),
    },
    {
      name: "Educación",
      buttonImg: educacionBoton,
      images: [educacionInterno1],
      description: (
        <ModalTextContainer>
          <h3>Educación: Red de Conocimiento</h3>
          <ModalImage src={educacionInterno1} alt="Educación" className="float-right" />
          <p>Plataforma educativa que integra el conocimiento en un sistema dinámico y accesible. Sus características clave son:</p>
          <h4>1. Integración de Contenidos</h4>
          <p>Conexión de información de diversas fuentes en un formato unificado y fácil de navegar.</p>
          <h4>2. Rutas de Aprendizaje Personalizadas</h4>
          <p>Algoritmos de IA que adaptan los planes de estudio a las necesidades individuales.</p>
          <h4>3. Gamificación y Realidad Extendida</h4>
          <p>Experiencias de aprendizaje inmersivas a través de juegos, AR y VR.</p>
        </ModalTextContainer>
      ),
    },
    {
      name: "Cultura",
      buttonImg: culturaBoton,
      images: [culturaInterno1],
      description: (
        <ModalTextContainer>
          <h3>Cultura: Red Sociocultural</h3>
          <ModalImage src={culturaInterno1} alt="Cultura" className="float-left" />
          <p>Plataforma dinámica que enriquece la vida comunitaria y cultural. Sus características son:</p>
          <h4>1. Opciones de Privacidad y Permanencia</h4>
          <p>Control total del usuario sobre la privacidad y duración de su contenido.</p>
          <h4>2. Perfiles Diversos y Grupos</h4>
          <p>Creación de múltiples perfiles y unión a comunidades con intereses específicos.</p>
          <h4>3. Interacción y Formatos</h4>
          <p>Experiencias en 2D, Realidad Aumentada (AR) y Realidad Virtual (VR).</p>
        </ModalTextContainer>
      ),
    },
  ];

  const handleNetworkClick = (index) => {
    setActiveNetwork(index);
  };

  const closeModal = () => {
    setActiveNetwork(null);
  };

  return (
    <SocialNetworksWrapper id={id} ref={sectionRef}>
      <SectionTitle>Red StarSeed</SectionTitle>
      <AnimatePresence>
        {!isContentVisible && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <NetworkButton onClick={() => setIsContentVisible(true)} isMain>
              <img src={mainButtonImg} alt="Entrar a Red StarSeed" />
            </NetworkButton>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContentVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <MainDescription>
              La Red StarSeed es un ecosistema digital descentralizado que integra tres redes interconectadas: Política, Educación y Cultura. Juntas, estas redes forman una base sólida para una nueva sociedad, donde la colaboración, la transparencia y el empoderamiento individual son los pilares fundamentales.
            </MainDescription>
            <ContentGrid>
              {networks.map((network, index) => (
                <ButtonContainer key={index}>
                  <NetworkButton
                    onClick={() => handleNetworkClick(index)}
                  >
                    <img src={network.buttonImg} alt={network.name} />
                  </NetworkButton>
                  <ButtonTitle>{network.name}</ButtonTitle>
                </ButtonContainer>
              ))}
            </ContentGrid>
          </motion.div>
        )}
      </AnimatePresence>
      
            {createPortal(
        <AnimatePresence>
          {activeNetwork !== null && (
            <ExpandedContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            >
              <ExpandedCardContent
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={closeModal}>&times;</CloseButton>
                {networks[activeNetwork].description}
              </ExpandedCardContent>
            </ExpandedContent>
          )}
        </AnimatePresence>,
        document.body
      )}
    </SocialNetworksWrapper>
  );
};

export default SocialNetworks;
