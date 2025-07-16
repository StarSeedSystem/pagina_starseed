import React from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const changeBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeaderWrapper = styled.header`
  height: 85vh; /* Aumenta la altura para dar más espacio */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end; /* Ancla el contenido abajo */
  color: white;
  padding: 20px;
  padding-bottom: 10vh; /* Sube el contenido desde el fondo */
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  background: linear-gradient(-45deg, #ff0000, #ffb000, #ffff00, #00ff00, #00ffff, #0000ff, #7000ff);
  background-size: 400% 400%;
  animation: ${changeBackground} 15s ease infinite;

  @media (max-width: 768px) {
    height: 75vh; /* Ajusta para tablet */
    border-bottom-left-radius: 40% 15%;
    border-bottom-right-radius: 40% 15%;
  }

  @media (max-width: 480px) {
    height: 70vh; /* Ajusta para móvil */
    border-bottom-left-radius: 30% 10%;
    border-bottom-right-radius: 30% 10%;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  max-width: min(50vw, 550px); /* Aumentado */
  margin: 0 auto 20px;
  z-index: 10;
  position: relative;

  .slick-slide img {
    width: 100%;
    height: auto;
    max-height: 40vh; /* Aumentado */
    object-fit: contain;
  }

  .slick-dots, .slick-arrow {
    display: none !important;
  }

  @media (max-width: 1200px) {
    max-width: min(90vw, 950px); /* Aumentado */
  }
  
  @media (max-width: 768px) {
    max-width: min(60vw, 650px); /* Aumentado */
  }
  
  @media (max-width: 480px) {
    max-width: 90vw; /* Aumentado */
    .slick-slide img {
      max-height: 40vh; /* Aumentado y movido al selector correcto */
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem); /* min, preferred, max */
  margin-bottom: 10px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const Subtitle = styled.h2`
  font-size: clamp(1.2rem, 3vw, 2rem); /* min, preferred, max */
  font-weight: normal;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`;

const Header = ({ logos, id }) => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <HeaderWrapper id={id}>
      <LogoContainer>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index}>
              <img src={logo} alt={`StarSeed Logo ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </LogoContainer>
      <TextContainer>
        <Title>Sociedad StarSeed</Title>
        <Subtitle>El sistema social (seed) de evolución universal (star)</Subtitle>
      </TextContainer>
    </HeaderWrapper>
  );
};

export default Header;