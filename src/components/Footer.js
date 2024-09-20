import React from 'react';
import styled, { keyframes } from 'styled-components';
import activistas from '/Users/alex/pagina_starseed/src/assets/imagenes/convocatoria/activistas.png';
import artistas from '/Users/alex/pagina_starseed/src/assets/imagenes/convocatoria/artistas.png';
import diseñadores from '/Users/alex/pagina_starseed/src/assets/imagenes/convocatoria/diseñadores.png';
import donadores from '/Users/alex/pagina_starseed/src/assets/imagenes/convocatoria/donadores.png';
import programadores from '/Users/alex/pagina_starseed/src/assets/imagenes/convocatoria/programadores.png';

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
  overflow: hidden; // Añadido para contener los iconos
`;

const TextContent = styled.div`
  position: relative;
  z-index: 2; // Asegura que el texto esté por encima de los iconos
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

const moveIcon = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(var(--toX), var(--toY));
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  opacity: 0.3;
  z-index: 1; // Asegura que los iconos estén debajo del texto
  animation: ${moveIcon} var(--duration) linear infinite;
  --toX: ${props => props.toX}vw;
  --toY: ${props => props.toY}vh;
  --duration: ${props => props.duration}s;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const MovingIcons = () => {
  const [icons, setIcons] = React.useState([]);

  const updateIcons = () => {
    const iconTypes = [activistas, artistas, diseñadores, donadores, programadores];
    return Array(30).fill().map(() => ({
      src: iconTypes[Math.floor(Math.random() * iconTypes.length)],
      key: Math.random(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      toX: (Math.random() - 0.5) * 200,
      toY: (Math.random() - 0.5) * 200,
      duration: Math.random() * 10 + 5
    }));
  };

  React.useEffect(() => {
    setIcons(updateIcons());
    const interval = setInterval(() => {
      setIcons(updateIcons());
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {icons.map((icon) => (
        <IconWrapper 
          key={icon.key} 
          top={icon.top} 
          left={icon.left} 
          toX={icon.toX} 
          toY={icon.toY} 
          duration={icon.duration}
        >
          <Icon src={icon.src} alt="" />
        </IconWrapper>
      ))}
    </>
  );
};

const Footer = () => {
  return (
    <FooterWrapper>
      <ColorBackground />
      <Content>
        <MovingIcons />
        <TextContent>
          <ConvocatoriaText>
            Convocatoria
          </ConvocatoriaText>
          <Description>
            Las posibilidades y velocidad de la creación y expansión del proyecto StarSeed dependen de los recursos tanto económicos como sociales. Buscamos inversionistas, donadores,activistas y artistas que ayuden a fomentar este proyecto revolucionario.
          </Description>
          <SocialButton href="https://linktr.ee/FundacionStarseed" target="_blank" rel="noopener noreferrer">
            Únete a nuestra comunidad
          </SocialButton>
        </TextContent>
      </Content>
    </FooterWrapper>
  );
};

export default Footer;