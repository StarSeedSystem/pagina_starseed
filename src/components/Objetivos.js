import React from 'react';
import styled from 'styled-components';

const ObjetivosWrapper = styled.section`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ObjetivoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 1rem;
`;

const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  max-width: 90%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const Objetivos = () => {
  const objetivos = [
    { 
      title: "Propósito", 
      description: "Descripción del propósito...", 
      icon: "/path/to/icon1.png",
    },
    { 
      title: "Objetivo 2", 
      description: "Descripción del objetivo 2...", 
      icon: "/path/to/icon2.png",
    },
    // ... más objetivos
  ];

  return (
    <ObjetivosWrapper>
      {objetivos.map((objetivo, index) => (
        <ObjetivoItem key={index}>
          <TextContent>
            <Title>{objetivo.title}</Title>
            <Description>{objetivo.description}</Description>
          </TextContent>
          <IconWrapper>
            <Icon src={objetivo.icon} alt={objetivo.title} />
          </IconWrapper>
        </ObjetivoItem>
      ))}
    </ObjetivosWrapper>
  );
};

export default Objetivos;