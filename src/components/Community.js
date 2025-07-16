import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';
import izquierda from '../assets/nuevas_imagenes/7 unete revolucion/izquierda.png';
import derecha from '../assets/nuevas_imagenes/7 unete revolucion/derecha.png';
import abajo from '../assets/nuevas_imagenes/7 unete revolucion/abajo.png';

const CommunityWrapper = styled(SectionWrapper)`
  text-align: center;
  padding: 3rem 1.5rem;
`;

const RevolutionLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 2024px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  max-width: 600px;
  font-size: 1.8rem;
  line-height: 1.6;
  text-align: justify;

  p {
    margin-bottom: 1.5rem;
  }
`;

const BottomImageContainer = styled.div`
  margin-top: 2rem;
`;

const StyledImage = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 10px;
`;



const Community = () => {
  return (
    <CommunityWrapper id="community">
      <SectionTitle>¡Únete a la Revolución StarSeed!</SectionTitle>
      <RevolutionLayout>
        <StyledImage src={izquierda} alt="Comunidad Starseed Izquierda" />
        <TextContent>
          <p>
            La Red StarSeed es más que una plataforma; es un movimiento que empodera al individuo y fortalece a la comunidad. Aquí, cada persona tiene el poder de aprender, decidir y disfrutar, construyendo juntos un futuro más brillante y armonioso.
          </p>
          <p>
            ¿Listo para ser parte del cambio? Únete a nosotros y descubre cómo la combinación de tecnología, colaboración y visión puede transformar nuestras vidas y el mundo.
          </p>
        </TextContent>
        <StyledImage src={derecha} alt="Comunidad Starseed Derecha" />
      </RevolutionLayout>
      <BottomImageContainer>
        <StyledImage src={abajo} alt="Comunidad Starseed Abajo" style={{ maxWidth: '620px' }} />
      </BottomImageContainer>
    </CommunityWrapper>
  );
};

export default Community;