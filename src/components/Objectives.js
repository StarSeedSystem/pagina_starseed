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
    "Conceptualizar fundamentos universales con un diccionario espiritual y guía para la paz.",
    "Crear comunidades StarSeed para actividades recreativas, espirituales y educativas.",
    "Implementar un sistema económico sustentable, ecológico y comunista libre.",
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