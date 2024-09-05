import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './ContentSection';

const Button = styled(motion.button)`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  border: none;
  padding: 1.2rem 2.4rem;
  margin: 1.2rem;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 30px;
`;

const MissionDescription = styled.div`
  margin-top: 2.5rem;
`;

const MissionTitle = styled.h3`
  font-size: 3rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1.5rem;
`;

const MissionContent = styled.p`
  font-size: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Missions = () => {
  const [activeMission, setActiveMission] = useState(null);

  const missions = [
    {
      title: "Sistema político democrático Ontocrático",
      description: "Crear un sistema político democrático Ontocrático, en el que los poderes legislativo, ejecutivo y judicial sean votados y organizados por la población. Este sistema promueve la participación activa de los ciudadanos, garantizando completa transparencia y representatividad."
    },
    {
      title: "Sistema educativo de información libre",
      description: "Desarrollar un sistema educativo de información libre con clases guiadas y artículos. Este sistema permite a cualquier persona o grupo estudiar los temas de su interés, con recomendaciones sobre conocimientos previos necesarios. La educación se basa en estudios rigurosos, asegurando la veracidad, calidad y relevancia de los contenidos ofrecidos."
    },
    {
      title: "Red de medios digitales y espacios físicos",
      description: "Fomentar una red de medios digitales y espacios físicos que facilite el desarrollo social y cultural. Esta red promoverá la libre expresión y la comunicación de datos a través de diversos formatos, como el arte, eventos, mensajes, grupos etc. El objetivo es enriquecer la vida comunitaria y cultural mediante plataformas que permitan el intercambio de ideas y experiencias."
    }
  ];

  return (
    <SectionWrapper id="missions">
      <SectionTitle>Misiones</SectionTitle>
      <div>
        {missions.map((mission, index) => (
          <Button 
            key={index} 
            onClick={() => setActiveMission(activeMission === index ? null : index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mission.title}
          </Button>
        ))}
      </div>
      {activeMission !== null && (
        <MissionDescription>
          <MissionTitle>{missions[activeMission].title}</MissionTitle>
          <MissionContent>{missions[activeMission].description}</MissionContent>
        </MissionDescription>
      )}
    </SectionWrapper>
  );
};

export default Missions;