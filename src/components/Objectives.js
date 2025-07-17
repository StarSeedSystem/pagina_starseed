import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';
import guiaImg from '../assets/nuevas_imagenes/4 objetivos/fundamentos universales.png';
import comunidadImg from '../assets/nuevas_imagenes/4 objetivos/comunidades.png';
import constitucionImg from '../assets/nuevas_imagenes/4 objetivos/constitucion.png';
import viviendasImg from '../assets/nuevas_imagenes/4 objetivos/viviendas.png';
import redImg from '../assets/nuevas_imagenes/4 objetivos/red.png';

const ObjectivesWrapper = styled(SectionWrapper)`
  padding: 2rem 1rem;
  max-width: 100%;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 3rem;
`;

const ObjectiveItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 2rem 1.5rem;
  border-radius: 150px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  transition: box-shadow 1s ease;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 0 150px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 1.75rem 1.25rem;
    border-radius: 120px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
    border-radius: 100px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
    border-radius: 50px;
    margin-bottom: 1rem;
  }
`;

const ObjectiveImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 1.5rem;
  object-fit: contain;
  border-radius: 20px;

  @media (max-width: 1024px) {
    max-width: 500px;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    margin-bottom: 1rem;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    margin-bottom: 0.75rem;
    border-radius: 10px;
  }

  @media (max-width: 360px) {
    max-width: 250px;
  }
`;

const ObjectiveContent = styled.div`
  width: 100%;
`;

const ObjectiveTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 1.3;
  color: ${props => props.theme.colors.primary};

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
`;

const ObjectiveDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    font-size: 1.05rem;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

const Objectives = () => {
  return (
    <ObjectivesWrapper id="objectives">
      <StyledSectionTitle>Objetivos Clave</StyledSectionTitle>
      
      <ObjectiveItem>
        <ObjectiveImage src={guiaImg} alt="Fundamentos Universales" />
        <ObjectiveContent>
          <ObjectiveTitle>Conceptualización de los Fundamentos Universales</ObjectiveTitle>
          <ObjectiveDescription>
            Diccionario y una guía para la paz comunal y la felicidad individual.
            Secciones sobre salud física, emocional, social y espiritual, promoviendo el bienestar integral.
            linktr.ee/alexbordon
          </ObjectiveDescription>
        </ObjectiveContent>
      </ObjectiveItem>

      <ObjectiveItem>
        <ObjectiveImage src={comunidadImg} alt="Comunidades StarSeed" />
        <ObjectiveContent>
          <ObjectiveTitle>Creación de Comunidades StarSeed (“Sangha StarSeed” - SSS)</ObjectiveTitle>
          <ObjectiveDescription>
            Organizar actividades recreativas y espirituales, charlas, clases y conversaciones grupales.
            Ofrecer los sistemas político, educativo y cultural en entornos presenciales, fortaleciendo las conexiones humanas.
          </ObjectiveDescription>
        </ObjectiveContent>
      </ObjectiveItem>

      <ObjectiveItem>
        <ObjectiveImage src={constitucionImg} alt="Constitución Democrática" />
        <ObjectiveContent>
          <ObjectiveTitle>Organización de Constitución Democrática (“Matrix StarSeed” - MSS)</ObjectiveTitle>
          <ObjectiveDescription>
            Leyes fundamentales que guíen a la Sociedad StarSeed.
            Derechos, límites y principios que aseguren una civilización evolutiva, próspera, armoniosa y respetuosa.
          </ObjectiveDescription>
        </ObjectiveContent>
      </ObjectiveItem>

      <ObjectiveItem>
        <ObjectiveImage src={redImg} alt="Red StarSeed" />
        <ObjectiveContent>
          <ObjectiveTitle>Desarrollo de la “Red StarSeed” (RSS)</ObjectiveTitle>
          <ObjectiveDescription>
            Red social digital interconectada, seccionada en tres áreas: Democracia, Educación y Recreación.
            Integra la participación ciudadana, el aprendizaje continuo y el enriquecimiento cultural en una sola plataforma.
          </ObjectiveDescription>
        </ObjectiveContent>
      </ObjectiveItem>

      <ObjectiveItem>
        <ObjectiveImage src={viviendasImg} alt="Viviendas Sostenibles" />
        <ObjectiveContent>
          <ObjectiveTitle>Desarrollo de Viviendas Sostenibles y Comunidades Autosuficientes</ObjectiveTitle>
          <ObjectiveDescription>
            Implementación un sistema económico sustentable, ecológico y comunal.
            Garantiza abundancia, prosperidad y respeto para todos, promoviendo la armonía con la naturaleza.
          </ObjectiveDescription>
        </ObjectiveContent>
      </ObjectiveItem>
    </ObjectivesWrapper>
  );
};

export default Objectives;