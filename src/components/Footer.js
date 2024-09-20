import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const colorChange = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FooterWrapper = styled.footer`
  position: relative;
  color: ${props => props.theme.colors.text};
  padding: 3rem 2rem;
  text-align: center;
  overflow: hidden;
`;

const ColorBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(270deg, #ff0000, #ffb000, #ffff00, #00ff00, #00ffff, #0000ff, #7000ff);
  background-size: 1400% 1400%;
  animation: ${colorChange} 30s ease infinite;
  filter: blur(10px);
  opacity: 0.7;
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 15px;
`;

const ConvocatoriaText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const SocialButton = styled.a`
  display: inline-block;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ColorBackground />
      <Content>
        <ConvocatoriaText>
          Convocatoria
        </ConvocatoriaText>
        <Description>
          Las posibilidades y velocidad de la creación y expansión del proyecto StarSeed dependen de los recursos tanto económicos como sociales. Buscamos inversionistas, donadores, inversionistas,activistas y artistas que ayuden a fomentar este proyecto revolucionario.
        </Description>
        <SocialButton href="https://linktr.ee/FundacionStarseed" target="_blank" rel="noopener noreferrer">
          Únete a nuestra comunidad
        </SocialButton>
      </Content>
    </FooterWrapper>
  );
};

export default Footer;