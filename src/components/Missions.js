import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';
import politicaImg from '../assets/imagenes/misiones/politica.png';
import educacionImg from '../assets/imagenes/misiones/educacion.png';
import culturaImg from '../assets/imagenes/misiones/cultura.png';

const MissionsWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
`;

const MissionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

const MissionTitle = styled.h3`
  font-size: 2.2rem;
  cursor: pointer;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.02);
  }
`;

const MissionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  text-align: left;
  max-width: 800px;
  margin: 1rem auto;
  font-size: 1.9rem;
  line-height: 1.6;
  overflow: hidden;
  max-height: ${props => props.isActive ? '1000px' : '0'};
  opacity: ${props => props.isActive ? '1' : '0'};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  padding: ${props => props.isActive ? '1rem' : '0 1rem'};
`;

const MissionText = styled.p`
  white-space: pre-wrap;
  flex: 2;
`;

const MissionImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  flex: 1;
`;

const Missions = () => {
  const [activeMission, setActiveMission] = useState(null);

  const missionData = {
    politica: {
      text: `Un modelo político donde los poderes legislativo, ejecutivo y judicial son organizados por la población, seccionado en entidades federativas basadas en comunidades reales y no en divisiones artificiales.\nUn modelo económico donde los recursos, medios y técnicas de producción sean organizadas y repartidas democráticamente a través del sistema político ontocrático.\nPromueve una participación ciudadana directa y activa, garantizando total transparencia y armonía mediante herramientas avanzadas de organización política y económica.\nImplementa tecnologías blockchain y sistemas descentralizados para asegurar la integridad y seguridad de los procesos democráticos.`,
      img: politicaImg
    },
    educacion: {
      text: `• Educación accesible para todos, con equipos, clases y artículos interactivos guiados por expertos y IA personalizadas.\n• Fomenta el aprendizaje autodirigido, permitiendo a individuos y grupos explorar sus intereses con recomendaciones personalizadas y guías avanzadas.\n• Basado en estudios científicos y fuentes verificadas, asegura la veracidad, calidad y relevancia de los contenidos, ofreciendo certificados opcionales reconocidos globalmente.\n• Promueve el pensamiento crítico, la creatividad y la innovación, preparando a los ciudadanos para los desafíos del futuro.`,
      img: educacionImg
    },
    cultura: {
      text: `• Espacios digitales y físicos que facilitan el desarrollo social y cultural, enriqueciendo la vida comunitaria.\n• Promueve la libre expresión y el intercambio de ideas, emociones y experiencias en diversos formatos, siempre bajo un marco de respeto y armonía.\n• Fomenta la creación artística, la colaboración y el diálogo intercultural, fortaleciendo el tejido social.`,
      img: culturaImg
    }
  };

  const handleMissionClick = (mission) => {
    setActiveMission(activeMission === mission ? null : mission);
  };

  return (
    <MissionsWrapper id="missions">
      <SectionTitle>Misiones; pilares fundamentales</SectionTitle>
      <MissionButtons>
        <MissionTitle onClick={() => handleMissionClick('politica')}>
          Sistema Político y Económico Democrático y Ontocrático
        </MissionTitle>
        <MissionContent isActive={activeMission === 'politica'}>
          <MissionText>{missionData.politica.text}</MissionText>
          <MissionImage src={missionData.politica.img} alt="Política" />
        </MissionContent>

        <MissionTitle onClick={() => handleMissionClick('educacion')}>
          Sistema Educativo Libre y Universal
        </MissionTitle>
        <MissionContent isActive={activeMission === 'educacion'}>
          <MissionText>{missionData.educacion.text}</MissionText>
          <MissionImage src={missionData.educacion.img} alt="Educación" />
        </MissionContent>

        <MissionTitle onClick={() => handleMissionClick('cultura')}>
          Red Social Cultural y Recreativa
        </MissionTitle>
        <MissionContent isActive={activeMission === 'cultura'}>
          <MissionText>{missionData.cultura.text}</MissionText>
          <MissionImage src={missionData.cultura.img} alt="Cultura" />
        </MissionContent>
      </MissionButtons>
    </MissionsWrapper>
  );
};

export default Missions;