import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';
import politica from '../assets/imagenes/misiones/politica.png';
import educacion from '../assets/imagenes/misiones/educacion.png';
import cultura from '../assets/imagenes/misiones/cultura.png';

const MissionsWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
`;

const MissionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

const MissionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-bottom: 1rem;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

const MissionImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 550px;
  object-fit: contain;
`;

const MissionContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 1rem auto;
  font-size: 1.9rem;
  line-height: 1.4;
  overflow: hidden;
  max-height: ${props => props.isActive ? '1000px' : '0'};
  opacity: ${props => props.isActive ? '1' : '0'};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

const Missions = () => {
  const [activeMission, setActiveMission] = useState(null);

  const missionContent = {
    politica: "Crear un sistema político democrático, Ontocrático, en el que los poderes legislativo, ejecutivo y judicial sean votados y organizados por la población. Este sistema promueve la participación activa de los ciudadanos, garantizando completa transparencia y representatividad.",
    educacion: "Desarrollar un sistema educativo de información libre con clases guiadas y artículos. Este sistema permite a cualquier persona o grupo estudiar los temas de su interés, con recomendaciones sobre conocimientos previos necesarios. La educación se basa en estudios rigurosos, asegurando la veracidad, calidad y relevancia de los contenidos ofrecidos.",
    cultura: "Fomentar una red de medios digitales y espacios físicos que facilite el desarrollo social y cultural. Esta red promoverá la libre expresión y la comunicación de datos a través de diversos formatos, como el arte, eventos, mensajes, grupos etc. El objetivo es enriquecer la vida comunitaria y cultural mediante plataformas que permitan el intercambio de ideas y experiencias."
  };

  const handleMissionClick = (mission) => {
    setActiveMission(activeMission === mission ? null : mission);
  };

  return (
    <MissionsWrapper id="missions">
      <SectionTitle>Misiones</SectionTitle>
      <MissionButtons>
        <MissionButton onClick={() => handleMissionClick('politica')}>
          <MissionImage src={politica} alt="Política" />
        </MissionButton>
        <MissionContent isActive={activeMission === 'politica'}>
          {missionContent.politica}
        </MissionContent>
        <MissionButton onClick={() => handleMissionClick('educacion')}>
          <MissionImage src={educacion} alt="Educación" />
        </MissionButton>
        <MissionContent isActive={activeMission === 'educacion'}>
          {missionContent.educacion}
        </MissionContent>
        <MissionButton onClick={() => handleMissionClick('cultura')}>
          <MissionImage src={cultura} alt="Cultura" />
        </MissionButton>
        <MissionContent isActive={activeMission === 'cultura'}>
          {missionContent.cultura}
        </MissionContent>
      </MissionButtons>
    </MissionsWrapper>
  );
};

export default Missions;