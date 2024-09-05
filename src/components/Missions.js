import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionWrapper } from './ContentSection';

const Button = styled(motion.button)`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 30px;
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
      <h2>Misiones</h2>
      <div className="mission-buttons">
        {missions.map((mission, index) => (
          <Button key={index} onClick={() => setActiveMission(index)}>
            {mission.title}
          </Button>
        ))}
      </div>
      {activeMission !== null && (
        <div className="mission-description">
          <h3>{missions[activeMission].title}</h3>
          <p>{missions[activeMission].description}</p>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Missions;