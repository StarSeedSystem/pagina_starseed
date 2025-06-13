import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';
import guiaImg from '../assets/imagenes/objetivos/guia_para_paz.png';
import comunidadImg from '../assets/imagenes/objetivos/comunidad.png';
import constitucionImg from '../assets/imagenes/objetivos/constitucion.png';
import viviendasImg from '../assets/imagenes/objetivos/viviendas.png';

const ObjectivesWrapper = styled(SectionWrapper)`
  padding-top: 1rem;
`;

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 3rem;
`;

const ObjectiveItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 150px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  transition: box-shadow 1s ease;

  &:hover {
    box-shadow: 0 0 150px rgba(255, 255, 255, 0.5);
  }
`;

const ObjectiveImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 1rem;
`;

const ObjectiveContent = styled.div`
  width: 100%;
`;

const ObjectiveTitle = styled.h3`
  font-size: 2.3rem;
  margin-bottom: 0.5rem;
`;

const ObjectiveDescription = styled.p`
  font-size: 1.5rem;
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