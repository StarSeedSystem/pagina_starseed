import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './ContentSection';
import politicaButtonImg from '../assets/nuevas_imagenes/5 Red social/1 politica/boton.png';
import educacionButtonImg from '../assets/nuevas_imagenes/5 Red social/2 educacion/boton.png';
import culturaButtonImg from '../assets/nuevas_imagenes/5 Red social/3 cultura/boton.png';

import politicaContentImg from '../assets/nuevas_imagenes/5 Red social/1 politica/interno.png';
import educacionContentImg from '../assets/nuevas_imagenes/5 Red social/2 educacion/interno.png';
import culturaContentImg from '../assets/nuevas_imagenes/5 Red social/3 cultura/interno.png';
import mainButtonImg from '../assets/nuevas_imagenes/3 misiones/boton principal de misiones.png';

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

const MissionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  text-align: left;
  max-width: 1000px;
  margin: 1rem auto;
  font-size: 1.9rem;
  line-height: 1.6;
  overflow: hidden;
  max-height: ${props => props.isActive ? '1000px' : '0'};
  opacity: ${props => props.isActive ? '1' : '0'};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  padding: ${props => props.isActive ? '1rem' : '0 1rem'};

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
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [activeMission, setActiveMission] = useState(null);

  const missionData = {
    politica: {
      buttonImg: politicaButtonImg,
      contentImg: politicaContentImg,
      text: `
        La soberanía reside en el individuo y se ejerce a través de una democracia directa y transparente, utilizando tecnología blockchain para garantizar la integridad de las decisiones colectivas. 
        Cada ciudadano tiene el poder de proponer, debatir y votar sobre leyes y políticas, eliminando la necesidad de intermediarios y asegurando que cada voz sea escuchada y contada.
      `,
    },
    educacion: {
      buttonImg: educacionButtonImg,
      contentImg: educacionContentImg,
      text: `
        Un sistema educativo personalizado y accesible para todos, que utiliza inteligencia artificial para adaptar el aprendizaje a las necesidades y talentos de cada individuo. 
        Fomentamos el pensamiento crítico, la creatividad y la colaboración, preparando a los ciudadanos para los desafíos del futuro y promoviendo un aprendizaje continuo a lo largo de la vida.
      `,
    },
    cultura: {
      buttonImg: culturaButtonImg,
      contentImg: culturaContentImg,
      text: `
        Una cultura basada en la empatía, la colaboración y el respeto por la diversidad. 
        Promovemos la creación y el acceso libre al arte y al conocimiento, utilizando tecnologías como la realidad virtual y aumentada para ofrecer experiencias inmersivas y enriquecedoras que conecten a las personas y celebren nuestra humanidad compartida.
      `,
    },
  };

  const handleMissionClick = (mission) => {
    setActiveMission(activeMission === mission ? null : mission);
  };

  return (
    <MissionsWrapper id={id}>
      <SectionTitle>Misiones StarSeed</SectionTitle>
      <AnimatePresence>
        {!isContentVisible && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <MissionButton onClick={() => setIsContentVisible(true)} isMain>
              <img src={mainButtonImg} alt="Entrar a Misiones" />
            </MissionButton>
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
            <MissionButtons>
              {Object.entries({
                politica: 'Sistema Político',
                educacion: 'Educación',
                cultura: 'Cultura'
              }).map(([key, title]) => (
                <ButtonContainer key={key}>
                  <MissionButton
                    onClick={() => handleMissionClick(key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={title}
                  >
                    <img 
                      src={missionData[key].buttonImg} 
                      alt={title} 
                      title={title}
                    />
                  </MissionButton>
                  <ButtonTitle>{title}</ButtonTitle>
                </ButtonContainer>
              ))}
            </MissionButtons>
            
            <MissionContent isActive={activeMission === 'politica'}>
              <MissionText>{missionData.politica.text}</MissionText>
              <MissionImage src={missionData.politica.contentImg} alt="Contenido de Política" />
              <CloseButton onClick={() => setActiveMission(null)}>&times;</CloseButton>
            </MissionContent>
            
            <MissionContent isActive={activeMission === 'educacion'}>
              <MissionText>{missionData.educacion.text}</MissionText>
              <MissionImage src={missionData.educacion.contentImg} alt="Contenido de Educación" />
              <CloseButton onClick={() => setActiveMission(null)}>&times;</CloseButton>
            </MissionContent>
            
            <MissionContent isActive={activeMission === 'cultura'}>
              <MissionText>{missionData.cultura.text}</MissionText>
              <MissionImage src={missionData.cultura.contentImg} alt="Contenido de Cultura" />
              <CloseButton onClick={() => setActiveMission(null)}>&times;</CloseButton>
            </MissionContent>
          </motion.div>
        )}
      </AnimatePresence>
    </MissionsWrapper>
  );
};

export default Missions;