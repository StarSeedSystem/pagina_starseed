import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SectionWrapper, SectionTitle } from './ContentSection';
import libertad from '../assets/nuevas_imagenes/2 proposito/iconos (externos)/libertad.png';
import paz from '../assets/nuevas_imagenes/2 proposito/iconos (externos)/paz.png';
import union from '../assets/nuevas_imagenes/2 proposito/iconos (externos)/union.png';
import democracia from '../assets/nuevas_imagenes/2 proposito/comunismo ontocratico (interno de boton)/democracia.png';
import progreso from '../assets/nuevas_imagenes/2 proposito/comunismo ontocratico (interno de boton)/progreso.png';
import transhumanismo from '../assets/nuevas_imagenes/2 proposito/comunismo ontocratico (interno de boton)/transhumanismo.png';

const PurposeWrapper = styled(SectionWrapper)`
  padding: 2rem 1rem;
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const ContentLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    gap: 1.5rem;
    margin: 1.5rem auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin: 1rem auto;
  }
`;

const BottomImageContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const PurposeContent = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  line-height: 1.7;
  text-align: justify;
  margin: 1.5rem auto;
  padding: 0 1rem;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 1.15rem;
    max-width: 650px;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
    padding: 0 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0 0.75rem;
    line-height: 1.5;
  }
`;

const PurposeImage = styled.img`
  width: 300px;
  max-width: 90vw;
  height: auto;
  object-fit: contain;
  
  @media (max-width: 1024px) {
    width: 250px;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    max-width: 80vw;
  }
  
  @media (max-width: 480px) {
    width: 150px;
    max-width: 70vw;
  }
`;

const StarSeedButton = styled.button`
  background-color:rgb(50, 123, 176); /* Similar to a common button color */
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
    background-color:rgb(30, 179, 0);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 20px 40px;
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

const ModalContent = styled.div`
  background: rgba(26, 26, 26, 0.15); /* Dark semi-transparent background */
  padding: 2.5rem;
  border-radius: 70px; /* More rounded corners */
  width: 80%;
  max-width: 900px;
  max-height: 85vh; /* Limit height and enable scrolling */
  overflow-y: auto;   /* Enable vertical scroll */
  position: relative;
  box-shadow: 0 5px 20px rgba(0,0,0,0.4);
  border: 1px solid rgba(0, 170, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(-50px)'};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }

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

const ModalImage = styled.img`
  width: 450px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  
  &.float-left {
    float: left;
    margin: 0 1.5rem 1rem 0;
  }

  &.float-right {
    float: right;
    margin: 0 0 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    float: none;
    display: block;
    margin: 1.5rem auto;
    width: 100%;
    max-width: 1500px;
  }
`;

const ModalTextContainer = styled.div`
  /* Clear floats */
  &:after {
    content: "";
    display: table;
    clear: both;
  }

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

const SliderWrapper = styled.div`
  margin: 2rem 0;
  .slick-prev:before,
  .slick-next:before {
    color: #00aaff;
  }
`;

const DesktopView = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileView = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`;

const MobileSliderImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  margin: 0 auto;
`;

const Purpose = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const purposeImages = [paz, libertad, union];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <PurposeWrapper id="purpose">
        <TitleContainer>
          <SectionTitle>Propósito</SectionTitle>
        </TitleContainer>

        <DesktopView>
          <ContentLayout>
            <PurposeImage src={paz} alt="Paz" />
            <PurposeContent>
              La ontocracia ciberdélica transhumanista comunista es el núcleo del Sistema de la Sociedad StarSeed (SSSS); al fusionar el poder ciudadano con el gobierno político y económico, a través de participación democrática directa con organización de tecnologías colectivas para el bien común; este es el verdadero sistema político y económico evolutivo, armonioso, próspero y abundante de la confederación intergaláctica.
            </PurposeContent>
            <PurposeImage src={libertad} alt="Libertad" />
          </ContentLayout>
          <BottomImageContainer>
            <PurposeImage src={union} alt="Unión" />
          </BottomImageContainer>
        </DesktopView>

        <MobileView>
          <PurposeContent>
            La ontocracia ciberdélica transhumanista comunista es el núcleo del Sistema de la Sociedad StarSeed (SSSS); al fusionar el poder ciudadano con el gobierno político y económico, a través de participación democrática directa con organización de tecnologías colectivas para el bien común; este es el verdadero sistema político y económico evolutivo, armonioso, próspero y abundante de la confederación intergaláctica.
          </PurposeContent>
          <SliderWrapper>
            <Slider {...sliderSettings}>
              {purposeImages.map((img, index) => (
                <div key={index}>
                  <MobileSliderImage src={img} alt={`Propósito ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </SliderWrapper>
        </MobileView>

        <div style={{ textAlign: 'center' }}>
          <StarSeedButton onClick={handleOpenModal}>Comunismo Ontocrático StarSeed</StarSeedButton>
        </div>
      </PurposeWrapper>

      {isModalOpen && (
        <ModalBackdrop show={isModalOpen} onClick={handleCloseModal}>
          <ModalContent show={isModalOpen} onClick={(e) => e.stopPropagation()}> {/* Prevents modal from closing when clicking inside content */}
            <ModalCloseButton onClick={handleCloseModal}>&times;</ModalCloseButton>
            <ModalTextContainer>
              <h3>Comunismo StarSeed</h3>
              
              <p><strong>Recursos, medios y técnicas de producción bienes, productos y servicios colectivos</strong></p>
              
              <p>Imagina un mundo donde todo lo que necesitas está a tu alcance, sin costo alguno. Una sociedad en la que la abundancia reemplaza la escasez y donde la vida fluye libre de jerarquías, estructuras opresivas y desigualdad. Aquí, el poder no pertenece a unos pocos; el verdadero poder está en cada persona, en una comunidad que no depende de gobiernos tradicionales ni de élites. En este mundo, la democracia no es una ilusión, sino una fuerza viva y palpable que impulsa cada decisión. Bienvenidos a LA revolución social, un modelo de comunidad avanzada, libre y equitativa, donde la vida se experimenta en su máxima plenitud, con paz y felicidad.</p>
              
              <h4>Democracia Real: El Poder es Nuestro</h4>
              <ModalImage src={democracia} alt="Democracia" className="float-left" />
              <p>En esta comunidad, la democracia es el motor. No existe un gobierno centralizado que dicte las normas, ni élites que controlen desde arriba. Aquí, el poder es verdaderamente nuestro, y cada miembro de la comunidad es parte activa de la toma de decisiones. Cada elección sobre la producción, la administración de recursos y el bienestar común es tomada a través de un proceso democrático donde todas las voces cuentan. No hay intermediarios, no hay burocracia que frene el cambio; esta es una democracia directa, viva, y abierta, donde la comunidad misma es el único poder.</p>
              <p>Gracias a la tecnología como dispositivos moviles, robots e IA, cada persona tiene la capacidad de influir en cada aspecto de su entorno. Plataformas seguras y transparentes permiten que las decisiones colectivas se tomen de manera justa, informada y equitativa. La tecnología y la ciencia, en lugar de servir a unos pocos, trabaja para toda la comunidad, ofreciendo análisis imparciales, organizando ideas, y facilitando que cada individuo participe sin dificultad. Aquí, cada voz tiene peso, y cada decisión es nuestra.</p>
              
              <h4>Una Producción Comunitaria para la Abundancia Colectiva</h4>
              <ModalImage src={progreso} alt="Progreso" className="float-right" />
              <p>Y en este modelo de producción comunitaria, la abundancia es un derecho, no un privilegio. Cada persona tiene acceso a bienes y servicios sin costo alguno: desde alimentos frescos, suplementos y dispositivos de última generación, hasta tecnología avanzada como robots asistentes, impresoras 3D, vehículos autónomos y herramientas de realidad virtual. La tecnología está al servicio de todos, liberándonos de las tareas más arduas para que podamos dedicarnos a lo que de verdad importa: vivir, crear, aprender, y crecer.</p>
              <p>La agricultura, la fabricación y los servicios son gestionados por sistemas de IA y robots, produciendo de manera sostenible y ecológica. No hay explotación ni escasez. A cada miembro de la comunidad se le brinda acceso a alimentos cultivados sin dañarse el planeta, ropa personalizada, herramientas de arte y de música, y todo aquello que nutre cuerpo, mente y espíritu. Este es un sistema que honra a la naturaleza, la respeta y la integra en la vida diaria.</p>
              
              <h4>Transhumanismo y Singularidad Tecnológica</h4>
              <ModalImage src={transhumanismo} alt="Transhumanismo" className="float-left" />
              <p>Y en el corazón de esta comunidad late la promesa del transhumanismo: la superación de nuestras limitaciones biológicas a través de la ciencia y la tecnología. Aquí, la fusión con la IA no es una fantasía, sino una realidad que nos permite expandir nuestra conciencia, mejorar nuestras capacidades y alcanzar un estado de plenitud que antes era inimaginable. La singularidad tecnológica no es un evento que temer, sino una oportunidad para evolucionar hacia una nueva forma de ser, más conectada, más consciente y más libre.</p>
              <p>Esta es una comunidad donde la vida es abundante, la democracia es real y el futuro es nuestro para crearlo. Un lugar donde cada día es una oportunidad para explorar, para crecer y para vivir en armonía con nosotros mismos, con los demás y con el universo.</p>
              
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
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

export default Purpose;