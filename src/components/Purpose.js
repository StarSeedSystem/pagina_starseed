import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';
import paloma from '../assets/imagenes/proposito/paloma.png';
import compasion from '../assets/imagenes/proposito/compasion.png';

const PurposeWrapper = styled(SectionWrapper)`
  padding: 1rem 1.5rem;
  position: relative;
`;

const PurposeContent = styled.p`
  font-size: 1.8rem;
  max-width: 900px;
  margin: 5rem auto 0;
  line-height: 1.6;
  text-align: center;
`;

const Icon = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
`;

const PeaceIcon = styled(Icon)`
  left: 5%;
  top: 10%;
`;

const CompassionIcon = styled(Icon)`
  right: 5%;
  top: 10%;
`;

const Purpose = () => {
  return (
    <PurposeWrapper id="purpose">
      <SectionTitle>Propósito</SectionTitle>
      <PurposeContent>
        Ayudar a la evolución de la civilización a través de sistemas de organización social que generan paz y compasión.
      </PurposeContent>
      <PeaceIcon src={paloma} alt="Paz" />
      <CompassionIcon src={compasion} alt="Compasión" />
    </PurposeWrapper>
  );
};

export default Purpose;