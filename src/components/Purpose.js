import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';
import compasion from '../assets/imagenes/proposito/compasion.png';
import paloma from '../assets/imagenes/proposito/paloma.png';

const PurposeWrapper = styled(SectionWrapper)`
  padding: 1rem 1.5rem;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const PurposeContent = styled.p`
  font-size: 1.8rem;
  max-width: 800px;
  line-height: 1.6;
  text-align: center;
  margin: 0 auto; /* Center the paragraph block */
`;

const PurposeImage = styled.img`
  width: 100px; /* Adjusted size for title alignment */
  height: auto;
`;

const Purpose = () => {
  return (
    <PurposeWrapper id="purpose">
      <TitleContainer>
        <PurposeImage src={paloma} alt="Paz" />
        <SectionTitle>Propósito</SectionTitle>
        <PurposeImage src={compasion} alt="Compasión" />
      </TitleContainer>
      <PurposeContent>
        La ontocracia ciberdélica transhumanista comunista es el núcleo del Sistema de la Sociedad StarSeed (SSSS); al fusionar el poder ciudadano con el gobierno político y económico, a través de participación democrática directa con organización de tecnologías colectivas para el bien común; este es el verdadero sistema político y económico evolutivo, armonioso, próspero y abundante de la confederación intergaláctica.
      </PurposeContent>
    </PurposeWrapper>
  );
};

export default Purpose;