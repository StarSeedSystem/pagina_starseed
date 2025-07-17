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

const textGlow = keyframes`
  0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(0,170,255,0.6), 0 0 60px rgba(0,170,255,0.4); }
  50% { text-shadow: 0 0 30px rgba(255,255,255,1), 0 0 60px rgba(0,170,255,0.8), 0 0 90px rgba(0,170,255,0.6); }
`;

const logoFloat = keyframes`
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-10px) scale(1.02); }
`;

const letterSpacing = keyframes`
  0%, 100% { letter-spacing: 0.1em; }
  50% { letter-spacing: 0.15em; }
`;

const HeaderWrapper = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  background: linear-gradient(-45deg, #ff0000, #ffb000, #ffff00, #00ff00, #00ffff, #0000ff, #7000ff);
  background-size: 400% 400%;
  animation: ${changeBackground} 15s ease infinite;
  width: 100%;
  max-width: 100vw;
  text-align: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    height: 90vh;
    padding: 1.5rem 1rem;
    border-bottom-left-radius: 45% 18%;
    border-bottom-right-radius: 45% 18%;
  }

  @media (max-width: 768px) {
    height: 85vh;
    padding: 1rem 0.75rem;
    border-bottom-left-radius: 40% 15%;
    border-bottom-right-radius: 40% 15%;
  }

  @media (max-width: 480px) {
    height: 80vh;
    padding: 0.75rem 0.5rem;
    border-bottom-left-radius: 35% 12%;
    border-bottom-right-radius: 35% 12%;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;
  animation: ${logoFloat} 6s ease-in-out infinite;
  filter: drop-shadow(0 10px 30px rgba(0,0,0,0.3));

  .slick-slider {
    width: 100%;
    visibility: visible;
    opacity: 1;
  }

  .slick-slide img {
    width: 100%;
    height: auto;
    max-height: 50vh;
    object-fit: contain;
    margin: 0 auto;
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .slick-dots, .slick-arrow {
    display: none !important;
  }

  @media (max-width: 1024px) {
    max-width: 500px;
    .slick-slide img {
      max-height: 45vh;
    }
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    .slick-slide img {
      max-height: 40vh;
    }
  }
  
  @media (max-width: 480px) {
    max-width: 320px;
    .slick-slide img {
      max-height: 35vh;
    }
  }

  @media (max-width: 360px) {
    max-width: 280px;
    .slick-slide img {
      max-height: 32vh;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
    border-radius: 2px;
  }
`;

const MainTitle = styled.div`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin: 0;
  line-height: 0.9;
  animation: ${textGlow} 4s ease-in-out infinite, ${letterSpacing} 8s ease-in-out infinite;
  background: linear-gradient(45deg, #ffffff, #00aaff, #ffffff, #ffaa00);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 9vw, 4.5rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(2rem, 10vw, 3.5rem);
  }
`;

const SubTitle = styled.div`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  margin: 0.5rem 0;
  line-height: 1.1;
  text-shadow: 0 2px 10px rgba(0,0,0,0.4);
  letter-spacing: 0.05em;
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 6vw, 2rem);
  }
`;

const DescriptionLine = styled.div`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 400;
  margin: 0.3rem 0;
  line-height: 1.3;
  text-shadow: 0 1px 5px rgba(0,0,0,0.3);
  opacity: 0.95;
  letter-spacing: 0.02em;
  
  @media (max-width: 768px) {
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 3.5vw, 1.3rem);
  }
`;

const TagLine = styled.div`
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 300;
  margin: 0.5rem 0 0 0;
  line-height: 1.4;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  opacity: 0.9;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 3vw, 1.1rem);
  }
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
        <MainTitle>SOCIEDAD</MainTitle>
        <SubTitle>StarSeed</SubTitle>
        <DescriptionLine>El sistema social (seed)</DescriptionLine>
        <TagLine>de evolución universal (star)</TagLine>
      </TextContainer>
    </HeaderWrapper>
  );
};

export default Header;