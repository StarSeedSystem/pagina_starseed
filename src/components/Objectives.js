import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';
import guiaParaPaz from '../assets/imagenes/objetivos/guia_para_paz.png';
import comunidad from '../assets/imagenes/objetivos/comunidad.png';
import viviendas from '../assets/imagenes/objetivos/viviendas.png';
import constitucion from '../assets/imagenes/objetivos/constitucion.png';

const ObjectivesWrapper = styled(SectionWrapper)`
  // Mantener estilos existentes
  padding-top: 1rem; // Subir el título
`;

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 3rem; // Aumentar el espacio debajo del título
`;

const ObjectiveItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 150px; // Aumentado para hacer los bordes más redondeados
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4); // Fondo más oscuro y transparente
  transition: box-shadow 1s ease;

  &:hover {
    box-shadow: 0 0 150px rgba(255, 255, 255, 0.5); // Iluminación de los márgenes al pasar el mouse
  }
`;

const ObjectiveIcon = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-top: 1rem;
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
      <StyledSectionTitle>Objetivos</StyledSectionTitle>
      
      <ObjectiveItem>
        <ObjectiveContent>
          <ObjectiveTitle>Guía para la Paz</ObjectiveTitle>
          <ObjectiveDescription>
          Conceptualizar los fundamentos universales con un diccionario y una guía para la paz, incluyendo secciones sobre salud corporal, emocional y espiritual.
          </ObjectiveDescription>
        </ObjectiveContent>
        <ObjectiveIcon src={guiaParaPaz} alt="Guía para la Paz" />
      </ObjectiveItem>

      <ObjectiveItem>
        <ObjectiveContent>
          <ObjectiveTitle>Comunidades Autosustentables</ObjectiveTitle>
          <ObjectiveDescription>
          Crear comunidades StarSeed donde se realicen actividades recreativas y espirituales, charlas, clases y conversaciones grupales. Estos espacios también servirán como centros de votación públicos para personas sin acceso a dispositivos móviles y para ofrecer el sistema político, educativo y cultural en entornos físicos.
          </ObjectiveDescription>
        </ObjectiveContent>
        <ObjectiveIcon src={comunidad} alt="Comunidades Autosustentables" />
      </ObjectiveItem>

      <ObjectiveItem>
        <ObjectiveContent>
          <ObjectiveTitle>Viviendas Ecológicas</ObjectiveTitle>
          <ObjectiveDescription>
          Crear viviendas y promover la implementación del sistema en las sociedades e implementar un sistema económico sustentable ecológico comunista libre con abundancia y respeto para todes.
          </ObjectiveDescription>
        </ObjectiveContent>
        <ObjectiveIcon src={viviendas} alt="Viviendas Ecológicas" />
      </ObjectiveItem>

      <ObjectiveItem>
        <ObjectiveContent>
          <ObjectiveTitle>Constitución StarSeed</ObjectiveTitle>
          <ObjectiveDescription>
          Crear democráticamente una constitución starseed que defina las leyes fundamentales que dirijan la sociedad starseed y permitan una civilización evolutiva.
          </ObjectiveDescription>
        </ObjectiveContent>
        <ObjectiveIcon src={constitucion} alt="Constitución Global" />
      </ObjectiveItem>
    </ObjectivesWrapper>
  );
};

export default Objectives;