import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './ContentSection';
import politicaButtonImg from '../assets/nuevas_imagenes/5 Red social/1 politica/boton.png';
import educacionButtonImg from '../assets/nuevas_imagenes/5 Red social/2 educacion/boton.png';
import culturaButtonImg from '../assets/nuevas_imagenes/5 Red social/3 cultura/boton.png';

import politicaContentImg from '../assets/nuevas_imagenes/5 Red social/1 politica/interno.png';
import educacionContentImg from '../assets/nuevas_imagenes/5 Red social/2 educacion/interno.png';
import culturaContentImg from '../assets/nuevas_imagenes/5 Red social/3 cultura/interno.png';

const MissionsWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  gap: 1.5rem;
`;

const MissionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;

  padding: 2rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
`;

const ButtonTitle = styled.span`
  margin-top: 1rem;
  color: ${props => props.theme.colors.lightText};
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  max-width: 250px;
`;

const MissionButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  /* APLICAMOS ESTILOS DIFERENTES SEGÚN SI ES EL BOTÓN PRINCIPAL O NO */
  ${props => props.isMain 
    ? `
      /* ESTILOS PARA EL BOTÓN PRINCIPAL (isMain = true) */
      img {
        width: 1000px; /* PANTALLAS GRANDES */
        height: auto;
        margin-bottom: 2rem;

        @media (max-width: 1024px) {
          width: 80vw; /* TABLETS GRANDES */
        }

        @media (max-width: 768px) {
          width: 85vw; /* TABLETS PEQUEÑAS */
        }

        @media (max-width: 480px) {
          width: 90vw; /* MÓVILES */
        }
      }
    ` 
    : `
      /* ESTILOS PARA LOS BOTONES INTERNOS (isMain = false) */
      img {
        width: 300px;
        height: 300px;
        object-fit: contain;

        @media (max-width: 1024px) {
          width: 180px;
          height: 180px;
        }

        @media (max-width: 768px) {
          width: 200px;
          height: 200px;
        }

        @media (max-width: 480px) {
          width: 200px;
          height: 200px;
        }
      }
    `
  }
`;

const MissionContent = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  text-align: left;
  max-width: 1000px;
  margin: 1rem auto;
  font-size: 1.9rem;
  line-height: 1.6;
  overflow: hidden;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1.6rem;
  }
`;

const MissionText = styled.p`
  white-space: pre-wrap;
  flex: 2;
`;

const MissionImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 15px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const Missions = ({ id }) => {
  const [activeMission, setActiveMission] = useState(null);
  const contentRef = useRef(null);

  const missionData = {
    politica: {
      title: 'Sistema Político',
      buttonImg: politicaButtonImg,
      contentImg: politicaContentImg,
      text: `
        La soberanía reside en el individuo y se ejerce a través de una democracia directa y transparente, utilizando tecnología blockchain para garantizar la integridad de las decisiones colectivas. 
        Cada ciudadano tiene el poder de proponer, debatir y votar sobre leyes y políticas, eliminando la necesidad de intermediarios y asegurando que cada voz sea escuchada y contada.
      `
    },
    educacion: {
      title: 'Sistema Educativo',
      buttonImg: educacionButtonImg,
      contentImg: educacionContentImg,
      text: `
        Un sistema educativo descentralizado y personalizado, donde el aprendizaje es un viaje de autodescubrimiento. 
        Se fomenta la curiosidad y la creatividad, y se utilizan herramientas de IA para adaptar el contenido a las necesidades individuales, creando rutas de aprendizaje únicas.
      `
    },
    cultura: {
      title: 'Sistema Cultural',
      buttonImg: culturaButtonImg,
      contentImg: culturaContentImg,
      text: `
        Una cultura de colaboración, empatía y respeto, donde se celebran la diversidad y la creatividad. 
        Se promueven las artes, la ciencia y la filosofía como pilares del desarrollo humano, y se crean espacios para el diálogo y la co-creación.
      `
    }
  };

  const handleMissionClick = (mission) => {
    setActiveMission(prev => (prev === mission ? null : mission));
  };

  useEffect(() => {
    if (activeMission && contentRef.current) {
      const timer = setTimeout(() => {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300); // Wait for animation
      return () => clearTimeout(timer);
    }
  }, [activeMission]);

  return (
    <MissionsWrapper id={id}>
      <SectionTitle>Misiones StarSeed</SectionTitle>
      <MissionButtons>
        {Object.keys(missionData).map(missionName => (
          <ButtonContainer key={missionName}>
            <MissionButton onClick={() => handleMissionClick(missionName)}>
              <img src={missionData[missionName].buttonImg} alt={missionData[missionName].title} title={missionData[missionName].title} />
            </MissionButton>
            <ButtonTitle>{missionData[missionName].title}</ButtonTitle>
          </ButtonContainer>
        ))}
      </MissionButtons>

      <AnimatePresence>
        {activeMission && (
          <motion.div
            ref={contentRef}
            key="mission-content"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '2rem' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ width: '100%', overflow: 'hidden' }}
          >
            <MissionContent>
              <MissionText>{missionData[activeMission].text}</MissionText>
              <MissionImage src={missionData[activeMission].contentImg} alt={`Contenido de ${activeMission}`} />
              <CloseButton onClick={() => setActiveMission(null)}>&times;</CloseButton>
            </MissionContent>
          </motion.div>
        )}
      </AnimatePresence>
    </MissionsWrapper>
  );
};

export default Missions;