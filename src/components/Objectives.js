import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';
import guiaParaPaz from '../assets/imagenes/objetivos/guia_para_paz.png';
import comunidad from '../assets/imagenes/objetivos/comunidad.png';
import viviendas from '../assets/imagenes/objetivos/viviendas.png';
import constitucion from '../assets/imagenes/objetivos/constitucion.png';

const ObjectivesWrapper = styled(SectionWrapper)`
  // Mantener estilos existentes
`;

const ObjectiveItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ObjectiveIcon = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: ${props => props.alignRight ? '0 0 0 1rem' : '0 1rem 0 0'};
`;

const ObjectiveContent = styled.div`
  flex: 1;
`;

const ObjectiveTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ObjectiveDescription = styled.p`
  font-size: 1rem;
`;

const Objectives = () => {
  return (
    <ObjectivesWrapper id="objectives">
      <SectionTitle>Objetivos</SectionTitle>
      
      <ObjectiveItem>
        <ObjectiveIcon src={guiaParaPaz} alt="Guía para la Paz" />
        <ObjectiveContent>
          <ObjectiveTitle>Guía para la Paz</ObjectiveTitle>
          <ObjectiveDescription>
          Conceptualizar los fundamentos universales con un diccionario y una guía para la paz, incluyendo secciones sobre salud corporal, emocional y espiritual.
          </ObjectiveDescription>
        </ObjectiveContent>
      </ObjectiveItem>

      <ObjectiveItem>
        <ObjectiveContent>
          <ObjectiveTitle>Comunidades Autosustentables</ObjectiveTitle>
          <ObjectiveDescription>
          Crear comunidades StarSeed donde se realicen actividades recreativas y espirituales, charlas, clases y conversaciones grupales. Estos espacios también servirán como centros de votación públicos para personas sin acceso a dispositivos móviles y para ofrecer el sistema político, educativo y cultural en entornos físicos.
          </ObjectiveDescription>
        </ObjectiveContent>
        <ObjectiveIcon src={comunidad} alt="Comunidades Autosustentables" alignRight />
      </ObjectiveItem>

      <ObjectiveItem>
        <ObjectiveIcon src={viviendas} alt="Viviendas Ecológicas" />
        <ObjectiveContent>
          <ObjectiveTitle>Viviendas Ecológicas</ObjectiveTitle>
          <ObjectiveDescription>
          Crear viviendas y promover la implementación del sistema en las sociedades e implementar un sistema económico sustentable ecológico comunista libre con abundancia y respeto para todes.
          </ObjectiveDescription>
        </ObjectiveContent>
      </ObjectiveItem>

      <ObjectiveItem>
        <ObjectiveContent>
          <ObjectiveTitle>Constitución StarSeed</ObjectiveTitle>
          <ObjectiveDescription>
          Crear democráticamente una constitución starseed que defina las leyes fundamentales que dirijan la sociedad starseed y permitan una civilización evolutiva.
          </ObjectiveDescription>
        </ObjectiveContent>
        <ObjectiveIcon src={constitucion} alt="Constitución Global" alignRight />
      </ObjectiveItem>
    </ObjectivesWrapper>
  );
};

export default Objectives;