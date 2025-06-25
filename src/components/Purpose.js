import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionTitle } from './ContentSection';
import compasion from '../assets/imagenes/proposito/compasion.png';
import paloma from '../assets/imagenes/proposito/paloma.png';

const PurposeWrapper = styled(SectionWrapper)`
  padding: 1rem 1.5rem;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const PurposeContent = styled.p`
  font-size: 1.8rem;
  max-width: 800px;
  line-height: 1.6;
  text-align: center;
  margin: 0 auto; /* Center the paragraph block */

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const PurposeImage = styled.img`
  width: 15vw;
  max-width: 150px; /* Tamaño máximo para desktop */
  min-width: 80px;  /* Tamaño mínimo para mobile */
  height: auto;
`;

const StarSeedButton = styled.button`
  background-color: #007bff; /* Similar to a common button color */
  color: white;
  border: none;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContentWrapper = styled.div`
  background: #1a1a2e; /* Dark background similar to other expanded content */
  color: #e0e0e0; /* Light text for contrast */
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 900px;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  border: 1px solid #4a4a70;
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(-50px)'};
  transition: transform 0.3s ease-out;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #2c2c54;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #e0e0e0;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #007bff;
    transform: scale(1.1);
  }
`;

const ModalTextContainer = styled.div`
  h3 {
    color: #00aaff; /* Bright blue for main titles */
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  h4 {
    color: #50c878; /* Emerald green for subtitles */
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p, li {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1rem;
    text-align: justify;
  }
  ul {
    list-style-position: inside;
    padding-left: 0;
  }
  strong {
    color: #ffeb3b; /* Yellow for emphasis */
  }
`;


const Purpose = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
      <PurposeWrapper id="purpose">
        <TitleContainer>
          <PurposeImage src={paloma} alt="Paz" />
          <SectionTitle>Propósito</SectionTitle>
          <PurposeImage src={compasion} alt="Compasión" />
        </TitleContainer>
        <PurposeContent>
          La ontocracia ciberdélica transhumanista comunista es el núcleo del Sistema de la Sociedad StarSeed (SSSS); al fusionar el poder ciudadano con el gobierno político y económico, a través de participación democrática directa con organización de tecnologías colectivas para el bien común; este es el verdadero sistema político y económico evolutivo, armonioso, próspero y abundante de la confederación intergaláctica.
        </PurposeContent>
        <StarSeedButton onClick={handleOpenModal}>Comunismo Ontocrático StarSeed</StarSeedButton>
      </PurposeWrapper>

      {isModalOpen && (
        <ModalBackdrop show={isModalOpen} onClick={handleCloseModal}>
          <ModalContentWrapper show={isModalOpen} onClick={(e) => e.stopPropagation()}> {/* Prevents modal from closing when clicking inside content */}
            <ModalCloseButton onClick={handleCloseModal}>&times;</ModalCloseButton>
            <ModalTextContainer>
              <h3>Comunismo StarSeed</h3>
              <p><strong>Recursos, medios y técnicas de producción bienes, productos y servicios colectivos</strong></p>
              
              <p>Imagina un mundo donde todo lo que necesitas está a tu alcance, sin costo alguno. Una sociedad en la que la abundancia reemplaza la escasez y donde la vida fluye libre de jerarquías, estructuras opresivas y desigualdad. Aquí, el poder no pertenece a unos pocos; el verdadero poder está en cada persona, en una comunidad que no depende de gobiernos tradicionales ni de élites. En este mundo, la democracia no es una ilusión, sino una fuerza viva y palpable que impulsa cada decisión. Bienvenidos a LA revolución social, un modelo de comunidad avanzada, libre y equitativa, donde la vida se experimenta en su máxima plenitud, con paz y felicidad.</p>
              
              <h4>Democracia Real: El Poder es Nuestro</h4>
              <p>En esta comunidad, la democracia es el motor. No existe un gobierno centralizado que dicte las normas, ni élites que controlen desde arriba. Aquí, el poder es verdaderamente nuestro, y cada miembro de la comunidad es parte activa de la toma de decisiones. Cada elección sobre la producción, la administración de recursos y el bienestar común es tomada a través de un proceso democrático donde todas las voces cuentan. No hay intermediarios, no hay burocracia que frene el cambio; esta es una democracia directa, viva, y abierta, donde la comunidad misma es el único poder.</p>
              <p>Gracias a la tecnología como dispositivos moviles, robots e IA, cada persona tiene la capacidad de influir en cada aspecto de su entorno. Plataformas seguras y transparentes permiten que las decisiones colectivas se tomen de manera justa, informada y equitativa. La tecnología y la ciencia, en lugar de servir a unos pocos, trabaja para toda la comunidad, ofreciendo análisis imparciales, organizando ideas, y facilitando que cada individuo participe sin dificultad. Aquí, cada voz tiene peso, y cada decisión es nuestra.</p>
              
              <h4>Una Producción Comunitaria para la Abundancia Colectiva</h4>
              <p>Y en este modelo de producción comunitaria, la abundancia es un derecho, no un privilegio. Cada persona tiene acceso a bienes y servicios sin costo alguno: desde alimentos frescos, suplementos y dispositivos de última generación, hasta tecnología avanzada como robots asistentes, impresoras 3D, vehículos autónomos y herramientas de realidad virtual. La tecnología está al servicio de todos, liberándonos de las tareas más arduas para que podamos dedicarnos a lo que de verdad importa: vivir, crear, aprender, y crecer.</p>
              <p>La agricultura, la fabricación y los servicios son gestionados por sistemas de IA y robots, produciendo de manera sostenible y ecológica. No hay explotación ni escasez. A cada miembro de la comunidad se le brinda acceso a alimentos cultivados sin dañarse el planeta, ropa personalizada, herramientas de arte y de música, y todo aquello que nutre cuerpo, mente y espíritu. Este es un sistema que honra a la naturaleza, la respeta y la integra en la vida diaria.</p>
              
              <h4>Tecnología al Servicio del Bienestar Común</h4>
              <p>La inteligencia artificial y los robots no sirven a una minoría, sino a todos por igual. Cada persona tiene acceso a dispositivos de comunicación, computadoras, tablets y más, sin preocuparse por el costo o la obsolescencia. Las impresoras 3D permiten fabricar en casa los artículos que necesitamos, desde herramientas hasta juguetes, adaptándose a las necesidades y deseos de cada individuo. Todo, desde el entretenimiento hasta la nutrición, es accesible para todos, sin excepciones.</p>
              <p>La comunidad usa tecnología para democratizar el poder y evitar la formación de élites o estructuras de control. Es una sociedad donde la tecnología nos libera de las tareas rutinarias, permitiéndonos explorar nuestra creatividad, nuestras pasiones y nuestros sueños.</p>
              
              <h4>La Revolución Social, el transhumanismo</h4>
              <p>Este es el llamado a crear una utopía, un paraíso tecnológico simbiótico evolutivo con paz y prosperidad.</p>
              <p>Este modelo de comunidad avanzada es una invitación a cuestionar el mundo en que vivimos. ¿Por qué dedicamos nuestras vidas a trabajar, consumir y competir? ¿Por qué el poder está siempre en manos de unos pocos, cuando podría ser de todos? Este sistema propone una alternativa radical: una sociedad donde la libertad, la igualdad y el bienestar son realidades, y no ideales inalcanzables. Aquí, la verdadera riqueza es el tiempo y la paz que logramos al vivir en armonía con la naturaleza y con nuestros iguales.</p>
              <p>¿Te has preguntado alguna vez cómo sería vivir en un lugar donde el poder y la abundancia pertenecen a todos, y no a unos pocos? Este es un mundo donde cada ser humano tiene el poder de transformar su entorno, de decidir su destino, de vivir sin miedo y sin limitaciones. Esto es un recordatorio de que otro camino es posible, uno donde la colaboración y la creatividad sustituyen a la explotación y al control. Esta es la revolución social que nos libera y nos une, una visión de vida donde todos, juntos, construimos el mundo que siempre hemos soñado.</p>

              <h4>Categorías de Productos y Servicios Básicos con Suministros mensuales, semanales o diarios</h4>
              <ul>
                <li><strong>1. Tecnología Personal y Multimedia</strong>
                  <ul>
                    <li>Robots Asistentes: Asisten en tareas cotidianas, desde la organización personal hasta la realización de compras y servicios de salud.</li>
                    <li>Vehículos Autónomos: Coches eléctricos con IA para transporte personal y familiar.</li>
                    <li>Dispositivos de Realidad Virtual (VR) y Aumentada (AR): Para educación, entretenimiento, y experiencias inmersivas.</li>
                    <li>Computadoras y Tablets: Equipos de última generación, adaptables a las necesidades individuales.</li>
                    <li>Smartphones y Relojes Inteligentes: Comunicación y monitoreo de salud en tiempo real.</li>
                    <li>Impresoras 3D con Suministro de Materiales: Incluyendo un "matter compiler" para fabricar desde artículos básicos hasta herramientas.</li>
                  </ul>
                </li>
                <li><strong>2. Alimentos y Bienestar</strong>
                  <ul>
                    <li>Comida Saludable y Sostenible: Producida y cosechada por robots agrícolas, incluye alimentos frescos y suplementos.</li>
                    <li>Suplementos y Pócimas Naturales: Preparados con tecnología avanzada para mejorar el bienestar.</li>
                    <li>Drones de Entrega de Alimentos: Para llevar productos a áreas remotas o de difícil acceso.</li>
                  </ul>
                </li>
                <li><strong>3. Equipos para la Salud, Ejercicio y Bienestar Espiritual</strong>
                  <ul>
                    <li>Equipos de Ejercicio y Fitness: Para el uso doméstico y en áreas comunes.</li>
                    <li>Dispositivos y Herramientas de Bienestar Holístico: Humidificadores, inciensos, y otros elementos para la salud espiritual.</li>
                    <li>Asistencia en Meditación y Terapias Alternativas: Con soporte de IA para el cuidado mental y emocional.</li>
                  </ul>
                </li>
                <li><strong>4. Entretenimiento, Creatividad y Aprendizaje</strong>
                  <ul>
                    <li>Juguetes, Juegos y Equipos para Deportes: Incluyendo artículos de recreación, tanto en interiores como exteriores.</li>
                    <li>Materiales de Arte: Suministros variados para fomentar la creatividad en toda la comunidad.</li>
                    <li>Instrumentos Musicales y Equipos de Audio: Acceso gratuito para el desarrollo artístico y cultural.</li>
                    <li>Cámaras y Equipos de Grabación Profesional: Para captura de momentos y desarrollo de habilidades creativas.</li>
                  </ul>
                </li>
                <li><strong>5. Bienes Personales y de Higiene</strong>
                  <ul>
                    <li>Ropa y Accesorios: Incluyendo ropa básica y adaptada a las preferencias personales.</li>
                    <li>Maquillaje y Productos de Cuidado Personal: Amplia variedad para las necesidades de cada individuo.</li>
                    <li>Productos de Higiene y Cuidado Corporal: Jabones, champús, productos de higiene dental, entre otros.</li>
                  </ul>
                </li>
                <li><strong>6. Cocina, Jardinería y Decoración</strong>
                  <ul>
                    <li>Equipos de Cocina y Electrodomésticos: Incluyendo robots de cocina y electrodomésticos avanzados.</li>
                    <li>Herramientas de Jardinería y Huertos Urbanos: Para promover la producción local de alimentos.</li>
                    <li>Artículos de Decoración y Mobiliario Personalizado: Personalizables según el espacio y el gusto personal.</li>
                  </ul>
                </li>
                <li><strong>7. Sistemas de Sostenibilidad y Energía</strong>
                  <ul>
                    <li>Sistemas de Purificación y Recolección de Agua: Agua potable y sistemas de reciclaje de agua.</li>
                    <li>Paneles Solares y Baterías: Equipos de energía renovable para hogares y áreas comunes.</li>
                    <li>Control de Temperatura y Clima: Equipos de regulación de temperatura para mayor confort.</li>
                  </ul>
                </li>
                <li><strong>8. Mantenimiento y Reparación</strong>
                  <ul>
                    <li>Robots de Limpieza y Mantenimiento: Para garantizar la limpieza en espacios personales y comunes.</li>
                    <li>Herramientas de Reparación y Mantenimiento: Acceso a kits de herramientas y tecnología para pequeñas reparaciones domésticas.</li>
                  </ul>
                </li>
              </ul>
              <p>Esta visión no solo proporciona los recursos básicos, sino que fomenta una vida equilibrada y creativa, basada en el respeto por el medioambiente y el bienestar colectivo. La tecnología y el voluntariado sostienen una sociedad donde cada miembro puede vivir en paz, con acceso a todo lo que necesita para una vida plena con felicidad y prosperidad.</p>
            </ModalTextContainer>
          </ModalContentWrapper>
        </ModalBackdrop>
      )}
    </>
  );
};

export default Purpose;