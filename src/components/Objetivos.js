import React from 'react';
import styled from 'styled-components';

const ObjetivosWrapper = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ObjetivoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
  flex: 0 0 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

const TextContent = styled.div`
  flex: 1;
  padding: 1rem;
  text-align: ${props => props.alignLeft ? 'left' : 'right'};
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
      title: "Objetivo 1", 
      description: "Descripción del objetivo 1...", 
      icon: "/path/to/icon1.png",
      alignLeft: false
    },
    { 
      title: "Objetivo 2", 
      description: "Descripción del objetivo 2...", 
      icon: "/path/to/icon2.png",
      alignLeft: true
    },
    // ... más objetivos
  ];

  return (
    <ObjetivosWrapper>
      {objetivos.map((objetivo, index) => (
        <ObjetivoItem key={index}>
          {!objetivo.alignLeft && (
            <IconWrapper>
              <Icon src={objetivo.icon} alt={objetivo.title} />
            </IconWrapper>
          )}
          <TextContent alignLeft={objetivo.alignLeft}>
            <Title>{objetivo.title}</Title>
            <Description>{objetivo.description}</Description>
          </TextContent>
          {objetivo.alignLeft && (
            <IconWrapper>
              <Icon src={objetivo.icon} alt={objetivo.title} />
            </IconWrapper>
          )}
        </ObjetivoItem>
      ))}
    </ObjetivosWrapper>
  );
};

export default Objetivos;