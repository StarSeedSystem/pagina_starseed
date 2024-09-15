import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle, ContentGrid, ContentCard, CardContent } from './ContentSection';

const ObjectiveCard = styled(ContentCard)`
  font-size: 1.4rem;
  padding: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.5rem;
  }
`;

const Objectives = () => {
  const objectives = [
    "Conceptualizar los fundamentos universales con un diccionario y una guía para la paz, incluyendo secciones sobre salud corporal, emocional y espiritual.",
    "Crear comunidades StarSeed donde se realicen actividades recreativas y espirituales, charlas, clases y conversaciones grupales. Estos espacios también servirán como centros de votación públicos para personas sin acceso a dispositivos móviles y para ofrecer el sistema político, educativo y cultural en entornos físicos.",
    "Crear viviendas y promover la implementación del sistema en las sociedades e implementar un sistema económico sustentable ecológico comunista libre con abundancia y respeto para todes.",
    "Crear democráticamente una constitución starseed que defina las leyes fundamentales que dirijan la sociedad starseed y permitan una civilización evolutiva.",
    "Desarrollar una red social digital: Política, Educación y Cultura."
  ];

  return (
    <SectionWrapper id="objectives">
      <SectionTitle>Objetivos</SectionTitle>
      <ContentGrid>
        {objectives.map((objective, index) => (
          <ObjectiveCard key={index}>
            <CardContent>{objective}</CardContent>
          </ObjectiveCard>
        ))}
      </ContentGrid>
    </SectionWrapper>
  );
};

export default Objectives;