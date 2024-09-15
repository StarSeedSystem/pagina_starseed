import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';

const PurposeWrapper = styled(SectionWrapper)`
  padding: 3rem 1.5rem;
`;

const PurposeContent = styled.p`
  font-size: 1.8rem;
  max-width: 900px;
  margin: 1.5rem auto 0;
  line-height: 1.6;
`;

const Purpose = () => {
  return (
    <PurposeWrapper id="purpose">
      <SectionTitle>Propósito</SectionTitle>
      <PurposeContent>
      Ayudar a la evolución de la civilización a través de sistemas de organización social que generan paz y compasión.
      </PurposeContent>
    </PurposeWrapper>
  );
};

export default Purpose;