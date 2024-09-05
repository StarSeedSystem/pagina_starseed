import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle, ContentGrid, ContentCard, CardContent } from './ContentSection';

const ObjectiveCard = styled(ContentCard)`
  font-size: 1.6rem;
  padding: 2.5rem;
`;

const Objectives = () => {
  const objectives = [
    "Conceptualizar los fundamentos universales con un diccionario espiritual y una guía para la paz, incluyendo secciones sobre salud corporal, emocional y espiritual.",
    "Crear comunidades StarSeed donde se realicen actividades recreativas y espirituales, charlas, clases y conversaciones grupales.",
    "Crear zonas habitables y promover la implementación del sistema en las sociedades e implementar un sistema económico sustentable ecológico comunista libre con abundancia y respeto para todes.",
    "Desarrollar una red social digital dividida en tres secciones: Política, Educación y Cultura."
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