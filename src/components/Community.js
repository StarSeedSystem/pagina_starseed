import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';

const CommunityWrapper = styled(SectionWrapper)`
  text-align: center;
  padding: 3rem 1.5rem;
`;

const CommunityContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.6;

  p {
    margin-bottom: 1.5rem;
  }
`;



const Community = () => {
  return (
    <CommunityWrapper id="community">
      <SectionTitle>¡Únete a la Revolución StarSeed!</SectionTitle>
      <CommunityContent>
        <p>
          La Red StarSeed es más que una plataforma; es un movimiento que empodera al individuo y fortalece a la comunidad. Aquí, cada persona tiene el poder de aprender, decidir y disfrutar, construyendo juntos un futuro más brillante y armonioso.
        </p>
        <p>
          ¿Listo para ser parte del cambio? Únete a nosotros y descubre cómo la combinación de tecnología, colaboración y visión puede transformar nuestras vidas y el mundo.
        </p>
      </CommunityContent>
    </CommunityWrapper>
  );
};

export default Community;