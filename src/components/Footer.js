import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 2rem;
  text-align: center;
`;

const ConvocatoriaText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ConvocatoriaText>
        Convocatoria a: programadores, artistas, diseñadores, donadores, activistas, etc.
      </ConvocatoriaText>
      <p>
        Las posibilidades y velocidad de la creación y expansión del proyecto StarSeed dependen de los recursos tanto económicos como sociales, por eso se buscan inversionistas, donadores, activistas y artistas que ayuden a fomentarlo.
      </p>
    </FooterWrapper>
  );
};

export default Footer;