import React from 'react';
import styled from 'styled-components';

const ObjetivosWrapper = styled.section`
  padding: 2rem;
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
  padding: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  order: 2;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const TextContent = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  order: 1;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
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