import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionTitle, ContentGrid } from './ContentSection';

// Importar imagenes para los botones
import fase1Boton from '../assets/images/community/icono fase 1.png';
import fase2Boton from '../assets/images/community/icono fase 2.png';
import fase3Boton from '../assets/images/community/icono fase 3.png';
import ecosistemaBoton from '../assets/images/community/icono ecosistema.png';

// Importar imagenes internas
import fase1Interno from '../assets/images/community/fase1-interno.png';
import fase2Interno from '../assets/images/community/fase2-interno.png';
import fase3Interno from '../assets/images/community/fase3-interno.png';
import ecosistemaInterno from '../assets/images/community/ecosistema-interno.png';

// Importar nuevas imágenes para Fase 1
import fase1img1 from '../assets/nuevas_imagenes/6 comunidades/fase 1/1 interior.png';
import fase1img2 from '../assets/nuevas_imagenes/6 comunidades/fase 1/2 playa.png';
import fase1img3 from '../assets/nuevas_imagenes/6 comunidades/fase 1/3 zonas.png';
import fase1img4 from '../assets/nuevas_imagenes/6 comunidades/fase 1/4 zonas comunidad.png';
import fase1img5 from '../assets/nuevas_imagenes/6 comunidades/fase 1/5 comunidad.png';
import fase1img6 from '../assets/nuevas_imagenes/6 comunidades/fase 1/6 comunidad playa.png';
import fase1img7 from '../assets/nuevas_imagenes/6 comunidades/fase 1/7 playa.png';
import fase1img8 from '../assets/nuevas_imagenes/6 comunidades/fase 1/8 comunidad.png';
import fase1img9 from '../assets/nuevas_imagenes/6 comunidades/fase 1/9 playa.png';

// Importar nueva imagen para Ecosistema
import ecosistemaImg1 from '../assets/nuevas_imagenes/6 comunidades/ecosistema/1 amor evolucion.png';

// Reutilizamos los estilos del componente SocialNetworks
const MainDescription = styled.p`
  text-align: center;
  max-width: 900px;
  margin: 1rem auto;
  font-size: 1.8rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const NetworkButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 550px;
    height: 550px;
    object-fit: contain;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      width: 500px;
      height: 500px;
    }

    @media (max-width: 480px) {
      width: 300px;
      height: 300px;
    }
  }
`;

const ExpandedContent = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  overflow-y: auto; /* Enable scrolling */
  padding: 0;
  
  @media (max-width: 768px) {
    align-items: flex-start; /* Align to top on mobile */
  }
  
  @media (min-width: 769px) {
    align-items: flex-start; /* Align card to top */
    justify-content: center; /* Keep card horizontally centered */
    padding: 1rem; /* Reduce top padding to bring card higher */
  }
`;

const CloseButton = styled(motion.button)`
  position: fixed;
  top: 2rem;
  right: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`;

const ExpandedCardContent = styled.div`
  position: relative;
  width: 95%;
  max-width: 1200px;
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem 2rem 2rem; /* Top:1rem, R/L:2rem, Bottom:2rem */
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 auto; /* Ensure top/bottom margin is 0, auto for L/R */
  
  @media (min-width: 769px) {
    /* height: 90vh; */ /* Removed to allow content to determine height */
    max-height: 85vh; /* Define a max viewport for the card content */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    border-radius: 0;
    padding: 1rem;
    padding-top: 3rem;
    min-height: 100%; /* Fill screen height */
    height: auto; /* Allow to expand with content */
    margin: 0; /* No margin on mobile */
  }

  h3 { 
    font-size: 2.2rem; 
    margin-top: 0; /* Reduce top space */
    margin-bottom: 1.5rem; 
    color: ${props => props.theme.colors.primary};

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  h4 { 
    font-size: 1.8rem; 
    margin-top: 2rem; 
    margin-bottom: 0.8rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  p, ul { 
    margin-bottom: 1rem;
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  li { 
    margin-bottom: 0.5rem;
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

const TextContainer = styled.div`
  flex: 2;
  /* height: 100%; */ /* Removed, height managed by flex within ExpandedCardContent's max-height */
  overflow-y: auto;
  padding-right: 1.5rem;

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.4); border-radius: 4px; }
  &::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.6); }

  @media (max-width: 768px) {
    order: 2;
    padding-right: 0;
    flex: 1 1 auto;
    max-height: none; /* Don't restrict height */
    overflow-y: visible; /* Content flows naturally */
  }
`;

const ButtonTitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.lightText};
  margin-top: 0.75rem;
  text-align: center;
  max-width: 200px; /* Ensure title doesn't overflow too much */

   @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

const ContentImage = styled.img`
  max-width: 50%;
  height: auto;
  margin: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  object-fit: cover;
  max-height: 380px;
  
  &:hover {
    transform: scale(1.03) translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
  }
  
  &.float-left {
    float: left;
    margin: 0 2.5rem 1.5rem 0;
    shape-outside: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  }
  
  &.float-right {
    float: right;
    margin: 0 0 1.5rem 2.5rem;
    shape-outside: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
    max-width: 40%;
    clear: both;
    
    @media (max-width: 992px) {
      max-width: 45%;
      margin: 1.5rem 0 2rem 2rem;
    }
  }
  
  @media (max-width: 768px) {
    float: none !important;
    margin: 2.5rem auto !important;
    max-width: 80% !important;
    max-height: 350px;
    display: block;
  }
  
  @media (max-width: 480px) {
    max-width: 100% !important;
    max-height: 300px;
  }
`;

const TextBlock = styled.div`
  margin-bottom: 2.5rem;
  line-height: 1.7;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  h4 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
    position: relative;
    padding-bottom: 0.8rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, ${props => props.theme.colors.primary}, transparent);
    }
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.8rem;
    }
  }
  
  img {
    max-height: 350px;
    width: 85%;
    margin: 2rem auto;
    display: block;
    
    @media (max-width: 480px) {
      width: 100%;
      max-height: 300px;
    }
  }
`;

  

const StarSeedCommunity = () => {
  const [activeSection, setActiveSection] = useState(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const modalRef = useRef();
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (activeSection !== null) {
      // Prevent body scroll on desktop
      if (window.innerWidth > 768) {
        document.body.style.overflow = 'hidden';
      }
      // Ensure the modal content itself is scrolled to its top
      // The main section scrolling is handled by handleSectionClick
      const timer = setTimeout(() => {
        if (textRef.current) {
          textRef.current.scrollTop = 0;
        }
      }, 50); // Delay to ensure modal is rendered

      return () => {
        document.body.style.overflow = 'unset';
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeSection]);

  const handleSectionClick = (index) => {
    // First, ensure the community section is scrolled to the top of the viewport
    const communitySection = document.getElementById('starseed-community');
    if (communitySection) {
      // Calculate the current scroll position
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      // Get the target position (top of the community section)
      const targetPosition = communitySection.getBoundingClientRect().top + currentPosition;
      
      // Scroll to the target position with smooth behavior
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Force the scroll position to the exact top of the section
      // This helps ensure the section is perfectly aligned at the top
      const adjustScroll = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(currentScroll - targetPosition) > 1) {
          window.scrollTo(0, targetPosition);
          requestAnimationFrame(adjustScroll);
        }
      };
      
      // Start the adjustment
      requestAnimationFrame(adjustScroll);
    }
    
    // Then, open the modal by setting the active section
    setActiveSection(index);

    // After state update and modal render, focus and scroll internal content
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.focus();
      }
      if (textRef.current) {
        textRef.current.scrollTop = 0;
      }
    }, 50); // Adjusted timeout slightly to ensure modal is fully rendered
  };

  const sections = [
    {
      name: "Fase 1: La Semilla",
      buttonImg: fase1Boton,
      internalImg: fase1Interno,
      description: (
        <>
          <h3>Fase 1: La Semilla</h3>
          <TextBlock>
            <h4>Creando el Primer Centro Social Magnético</h4>
            <ContentImage src={fase1img1} alt="Interior del centro comunitario" className="float-right" />
            <p>Todo gran cambio comienza con un primer paso audaz y atractivo. Esta fase se centra en crear un espacio físico que actúe como un imán para la comunidad, un verdadero santuario para el cuerpo y el alma. Este centro no es solo un edificio, sino un ecosistema vivo de bienestar, diseñado para nutrir cada aspecto del ser humano: físico, emocional, mental y espiritual.</p>
            <p>Imagina un lugar donde la arquitectura se fusiona con la naturaleza, donde cada rincón está pensado para inspirar paz y conexión. Contará con áreas de relajación, espacios para terapias holísticas, nutrición consciente y actividades que fomentan el crecimiento personal y colectivo.</p>
          </TextBlock>

          <TextBlock>
            <h4>Zonas de Bienestar y Nutrición Consciente</h4>
            <ContentImage src={fase1img2} alt="Playa serena" className="float-left" />
            <p>El centro integrará zonas especializadas para el bienestar. Esto incluye áreas para la meditación, yoga, y otras prácticas contemplativas. Además, un componente clave será la nutrición, con una cocina comunitaria y un restaurante que ofrezca alimentos orgánicos, locales y preparados con amor, promoviendo una dieta que sane y revitalice.</p>
            <ContentImage src={fase1img3} alt="Zonas de la comunidad" className="float-right" />
            <p>Se crearán huertos comunitarios donde los miembros podrán cultivar sus propios alimentos, reconectando con la tierra y los ciclos naturales. Este enfoque en la soberanía alimentaria es fundamental para la resiliencia y la salud de la comunidad.</p>
          </TextBlock>

          <TextBlock>
            <h4>Comunidad y Conexión Humana</h4>
            <ContentImage src={fase1img4} alt="Zonas de la comunidad Starseed" className="float-left" />
            <p>Más allá de las instalaciones, el corazón de la Fase 1 es la gente. El centro será un lugar de encuentro, donde se tejerán lazos profundos y significativos. Se organizarán eventos, talleres y círculos de palabra para fomentar la comunicación auténtica y el apoyo mutuo. Será un refugio seguro para la expresión y la vulnerabilidad.</p>
            <ContentImage src={fase1img5} alt="Comunidad Starseed reunida" className="float-right" />
            <p>La Fase 1 es la base sobre la cual se construirá todo lo demás. Es la materialización de un sueño, un faro de luz que atraerá a aquellos que anhelan una forma de vida más consciente, conectada y llena de propósito.</p>
            <ContentImage src={fase1img6} alt="Comunidad en la playa" className="float-left" />
            <p>Este primer centro no solo servirá como modelo, sino que también generará la energía y los recursos necesarios para expandir la visión StarSeed a nuevas geografías y comunidades.</p>
          </TextBlock>

          <TextBlock>
            <h4>Integración con la Naturaleza</h4>
            <ContentImage src={fase1img7} alt="Playa y naturaleza" className="float-right" />
            <p>Un pilar fundamental del diseño del centro es su integración armónica con el entorno natural. Se utilizarán principios de bioconstrucción y permacultura para minimizar el impacto ecológico y maximizar la conexión con la Tierra. Los espacios al aire libre serán tan importantes como los interiores, con jardines, senderos y áreas para disfrutar de la belleza del paisaje.</p>
            <ContentImage src={fase1img8} alt="Comunidad Starseed en la naturaleza" className="float-left" />
            <p>La naturaleza no será un mero telón de fondo, sino un participante activo en la sanación y el bienestar de la comunidad. Se promoverán actividades como caminatas conscientes, baños de bosque y ceremonias al aire libre para honrar y celebrar nuestra conexión con el planeta.</p>
            <ContentImage src={fase1img9} alt="Playa paradisíaca" className="float-right" />
            <p>Esta primera semilla es un compromiso con la vida, un acto de co-creación con la Tierra para manifestar un futuro donde la humanidad y la naturaleza prosperen en equilibrio y armonía.</p>
          </TextBlock>
          


          <TextBlock>
            <h4>Diseño y Ambiente: El Templo Moderno</h4>
            <p>El espacio será concebido como un templo sagrado y moderno. Contrataremos a diseñadores de interiores y arquitectos visionarios para crear una estética natural, futurista, solarpunk, orgánica y colorida. El diseño incorporará arte visionario y geometría sagrada en cada rincón. El ambiente estará cargado de energía positiva mediante el uso estratégico de cuarzos gigantes, minerales, orgonitas y pirámides, haciendo que cada visita sea una experiencia de sanación y elevación.</p>
          </TextBlock>
          
          <TextBlock>
            <h4>La Experiencia Sensorial y Espiritual</h4>
            <p>Un espacio multifuncional para actividades grupales, conferencias, talleres, clases de yoga, meditaciones guiadas, ceremonias espirituales, obras de teatro y exposiciones.</p>
          </TextBlock>

          <TextBlock>
            <p>El <strong>Auditorio Principal</strong> es el corazón de nuestro centro, diseñado para albergar eventos grupales, conferencias y talleres. Con capacidad para cientos de personas, este espacio versátil cuenta con tecnología de punta en sonido e iluminación, adaptándose a todo tipo de presentaciones y actividades comunitarias.</p>
          </TextBlock>

          <TextBlock>
            <p>Nuestras <strong>Zonas de Sanación</strong> ofrecen un refugio para el bienestar integral. Con terapeutas certificados y un ambiente diseñado para la relajación, estas áreas están dedicadas a terapias alternativas como masajes, acupuntura, reiki y limpiezas energéticas.</p>
          </TextBlock>

          <TextBlock>
            <p>Las <strong>Experiencias Elementales</strong> conectan a los visitantes con los elementos de la naturaleza. El Temazcal representa el fuego y la purificación, mientras que las áreas de agua ofrecen terapias de contraste con baños de hielo y calor. Cada espacio está diseñado para estimular los sentidos y promover la sanación profunda.</p>
          </TextBlock>
          
          <TextBlock>
            <h4>Características Principales</h4>
            <ul>
              <li><strong>Auditorio Principal:</strong> Un espacio versátil para eventos grupales, conferencias, talleres y presentaciones.</li>
              <li><strong>Zonas de Sanación:</strong> Áreas dedicadas al bienestar con sesiones de masajes, acupuntura, reiki, y limpiezas energéticas.</li>
              <li><strong>Experiencias Elementales:</strong> Incluye un Temazcal para ceremonias de purificación, zona de fogata para reuniones nocturnas, y baños de hielo y calor (sauna/vapor) para terapias de contraste.</li>
              <li><strong>Área Freestyle y Jams:</strong> Escenario abierto con instrumentos musicales (guitarras, teclados, percusión) e instrumentos sagrados (cuencos tibetanos, gongs, tambores chamánicos) para expresión creativa.</li>
              <li><strong>Museo de Arte Rotativo:</strong> Galería dinámica donde artistas alineados con nuestra visión pueden exhibir y vender sus obras, con una comisión destinada a la Fundación StarSeed.</li>
            </ul>
          </TextBlock>



          <TextBlock>
            <h4>El Modelo Económico Inteligente</h4>
            <p>Implementamos un enfoque económico sostenible que beneficia a todos los involucrados:</p>
            <ul>
              <li><strong>Donación Mínima Consciente:</strong> Sistema accesible donde los visitantes contribuyen según sus posibilidades, asegurando la sostenibilidad del proyecto.</li>
              <li><strong>Tienda StarSeed y Fábrica de Cristal:</strong> 
                <ul>
                  <li>Tienda de autoservicio con productos saludables a granel, elaborados con ingredientes de la más alta calidad.</li>
                  <li>Procesos de producción transparentes en nuestras fábricas visibles.</li>
                  <li>Envases ecológicos reutilizables con información de StarSeed.</li>
                  <li>Sistema automatizado de pedidos y pagos basado en peso y tipo de producto.</li>
                </ul>
              </li>
            </ul>
          </TextBlock>

          <TextBlock>
            <h4>Sistema de Cuentas y Lealtad</h4>
            <ul>
              <li>Cuentas virtuales con verificación de identidad segura.</li>
              <li>Programa de lealtad con beneficios y descuentos exclusivos.</li>
              <li>Sistema de referidos para fomentar el crecimiento comunitario.</li>
              <li>Mercado artesanal con productos que reflejan nuestra filosofía.</li>
            </ul>
          </TextBlock>

          <TextBlock>
            <h4>Tecnología, Comunicación y Comunidad</h4>
            <p>Integramos la tecnología para mantener a la comunidad conectada e informada:</p>
            <ul>
              <li><strong>Canal StarSeed:</strong> Plataforma de medios con información actualizada sobre el proyecto, eventos y contenido inspirador.</li>
              <li><strong>Eventos Recurrentes:</strong> Celebración de ciclos naturales (solsticios, equinoccios, lunas llenas) para mantener la conexión con los ritmos naturales.</li>
            </ul>
          </TextBlock>
        </>
      )
    },
    {
      name: "Fase 2: El Fruto",
      buttonImg: fase2Boton,
      internalImg: fase2Interno,
      description: (
        <>
          <h3>Fase 2: El Fruto</h3>
          <TextBlock>
            <h4>Tecnología con Propósito y Expansión Orgánica</h4>
            <p>Con la comunidad floreciendo y la Fundación creciendo, el sistema evoluciona. Es el momento de cosechar los primeros frutos: expandir la visión, integrar viviendas y usar la tecnología para liberar nuestro verdadero potencial.</p>
          </TextBlock>
          

          
          <TextBlock>
            <h4>Implementación y Expansión</h4>
            <p>La automatización no buscará reemplazar, sino liberar. Conforme la Fase 2 avanza, la presencia de la automatización se vuelve más íntima y servicial. Ya no son solo sistemas industriales; son robots asistentes que se integran en la vida diaria.</p>
          </TextBlock>

          <TextBlock>
            <p>La <strong>Tecnología en Acción</strong> se integra de manera fluida en nuestra vida diaria. Los sistemas automatizados trabajan en armonía con los residentes, optimizando el uso de recursos y liberando tiempo para actividades creativas y de crecimiento personal.</p>
          </TextBlock>

          <TextBlock>
            <p>Nuestras <strong>Viviendas Sostenibles</strong> representan la armonía entre tecnología y naturaleza. Construidas con materiales ecológicos y equipadas con sistemas autosustentables, ofrecen un espacio de vida que respeta el medio ambiente mientras proporciona todas las comodidades modernas.</p>
          </TextBlock>

          <TextBlock>
            {/* Continue Implementación y Expansión */}
            <p>Pequeños robots limpiadores mantendrán los espacios impecables. En la cocina, brazos robóticos no solo prepararán alimentos, sino que aprenderán tus preferencias. Si necesitas una herramienta específica, reparar un dispositivo o crear algo, un robot especializado acudirá para ayudarte o te guiará en el proceso.</p>
            <h4>La Revolución del Trabajo</h4>
            <p>La comunidad tendrá acceso a talleres donde los robots pueden fabricar objetos personalizados bajo demanda, desde muebles hasta piezas de arte. Esta simbiosis creciente nos libera, no solo del trabajo tedioso, sino que nos empodera, permitiendo que un pensamiento o una necesidad se materialice casi instantáneamente.</p>
            <h5>Nuevos Roles y Oportunidades</h5>
            <ul>
              <li><strong>Anfitriones de la Comunidad:</strong> Facilitadores, maestros, artistas y guías que enriquecen la experiencia colectiva.</li>
              <li><strong>Demos de Tecnología Abierta:</strong> Espacios mensuales para presentar y debatir los avances tecnológicos.</li>
              <li><strong>Talleres de Co-creación:</strong> Donde la comunidad puede aprender y participar en el desarrollo de nuevas tecnologías.</li>
            </ul>
          </TextBlock>



          <TextBlock>
            <h4>Expansión Modular y Autosuficiencia</h4>
            <p>El crecimiento de nuestra comunidad se basa en principios de sostenibilidad y participación colectiva:</p>
            <h5>Crecimiento Orgánico</h5>
            <p>Los fondos generados se reinvierten de manera transparente en la expansión de la comunidad. Cada nueva adición se planifica cuidadosamente para mantener la armonía con el entorno y los valores comunitarios.</p>
            <h5>Viviendas Sostenibles</h5>
            <p>Implementación de las primeras unidades habitacionales ecológicas, diseñadas con materiales locales y tecnologías limpias. Cada vivienda incluirá:</p>
            <ul>
              <li>Sistemas de captación de agua pluvial</li>
              <li>Paneles solares integrados</li>
              <li>Huertos familiares automatizados</li>
              <li>Sistemas de gestión de residuos</li>
            </ul>
            <h5>Planificación Comunitaria</h5>
            <p>La expansión se guía por las necesidades y decisiones colectivas:</p>
            <ul>
              <li>Asambleas comunitarias para decidir prioridades</li>
              <li>Votaciones transparentes sobre proyectos de infraestructura</li>
              <li>Participación activa en el diseño de nuevos espacios</li>
            </ul>
          </TextBlock>

          <TextBlock>
            <h4>Gobernanza y Toma de Decisiones</h4>
            <p>Implementamos un sistema de gobernanza descentralizado que empodera a cada miembro de la comunidad:</p>
            <h5>Fondo de Expansión Comunitario</h5>
            <p>A través de la aplicación StarSeed, los miembros votan sobre las prioridades de inversión. Por ejemplo:</p>
            <ul>
              <li>"¿Invertimos en un sistema de recolección de agua de lluvia o en la construcción de los primeros domos geodésicos para vivienda?"</li>
              <li>"¿Qué área de desarrollo comunitario debería ser nuestra próxima prioridad?"</li>
            </ul>
            <h5>Transparencia Total</h5>
            <p>Todas las decisiones financieras y operativas son accesibles para los miembros de la comunidad, fomentando la confianza y la participación activa en el proyecto.</p>
          </TextBlock>
        </>
      ),
    },
    {
      name: "Fase 3: La Cosecha",
      buttonImg: fase3Boton,
      internalImg: fase3Interno,
      description: (
        <>
          <h3>Fase 3: La Cosecha</h3>
          <TextBlock>
            <h4>Alcanzando el Modelo de Abundancia Total: El Comunismo StarSeed</h4>
            <p>Esta es la culminación de la visión, donde el trabajo laboral es reemplazado por la creatividad y la pasión. Un mundo donde los recursos, medios y técnicas de producción son colectivos, y la vida fluye libre de jerarquías y escasez. Bienvenidos a la revolución social.</p>
          </TextBlock>



          <TextBlock>
            <h4>La Economía y Sociedad del Futuro: Comunismo StarSeed</h4>
            <p>Imagina un mundo donde todo lo que necesitas está a tu alcance, sin costo alguno. Una sociedad en la que la abundancia reemplaza la escasez y donde la vida fluye libre de jerarquías, estructuras opresivas y desigualdad. Aquí, el poder no pertenece a unos pocos; el verdadero poder está en cada persona, en una comunidad que no depende de gobiernos tradicionales ni de élites. En este mundo, la democracia no es una ilusión, sino una fuerza viva y palpable que impulsa cada decisión.</p>
          </TextBlock>

          <TextBlock>
            <p>La <strong>Visión de la Fase 3</strong> representa la materialización de nuestro sueño colectivo: una sociedad donde la tecnología y la conciencia se entrelazan para crear un mundo de abundancia y armonía. Cada elemento está diseñado para potenciar el bienestar individual y comunitario.</p>
          </TextBlock>

          <TextBlock>
            <p>La <strong>Comunidad en Armonía</strong> es el corazón de nuestra visión. Espacios diseñados para fomentar la conexión humana, el crecimiento personal y la colaboración creativa. Aquí, cada individuo encuentra su lugar y propósito dentro del tejido social.</p>
          </TextBlock>

          <TextBlock>
            <h4>Democracia Real: El Poder es Nuestro</h4>
            <p>En esta comunidad, la democracia es el motor. No existe un gobierno centralizado que dicte las normas. Cada elección sobre la producción, la administración de recursos y el bienestar común es tomada a través de un proceso democrático donde todas las voces cuentan. Plataformas tecnológicas seguras y transparentes permiten que las decisiones colectivas se tomen de manera justa, informada y equitativa.</p>
          </TextBlock>

          <TextBlock>
            <h4>Producción Comunitaria para la Abundancia Colectiva</h4>
            <p>En este modelo, la abundancia es un derecho. Este nivel de prosperidad es posible gracias a una red de fábricas personalizadas y completamente automatizadas. Estas no son las fábricas contaminantes del pasado. Son centros de creación limpios, modulares y silenciosos, organizados democráticamente por la comunidad. Su impacto ecológico es mínimo, utilizando energía 100% renovable y ciclos de materiales de circuito cerrado. Cualquier miembro puede enviar un diseño o una necesidad a la red, y estas fábricas lo producirán de manera eficiente y sostenible. La producción deja de ser masiva e impersonal para volverse personal, bajo demanda y en perfecta armonía con el planeta y la prosperidad colectiva.</p>
          </TextBlock>

          <TextBlock>
            <p>Nuestra <strong>Tecnología Avanzada</strong> está diseñada para ser intuitiva y accesible. Desde sistemas de inteligencia artificial hasta herramientas de fabricación personal, cada innovación está al servicio del desarrollo humano y la sostenibilidad ambiental.</p>
          </TextBlock>

          <TextBlock>
            <p>La <strong>Vida Sostenible</strong> se integra en cada aspecto de nuestra comunidad. Desde la arquitectura bioclimática hasta los sistemas de producción de alimentos, cada elemento está pensado para minimizar nuestro impacto ambiental mientras maximizamos la calidad de vida.</p>
          </TextBlock>

          <TextBlock>
            <p>Nuestra <strong>Comunidad Global</strong> se extiende más allá de las fronteras físicas. A través de la tecnología y las redes de colaboración, estamos construyendo puentes entre culturas y naciones, creando una red mundial de comunidades autosostenibles que comparten conocimientos y recursos.</p>
          </TextBlock>

          <TextBlock>
            <h4>Tecnología al Servicio del Bienestar Común: El Transhumanismo</h4>
            <p>La inteligencia artificial y los robots no sirven a una minoría, sino a todos por igual. Nos liberan de las tareas rutinarias, permitiéndonos explorar nuestra creatividad, nuestras pasiones y nuestros sueños. Este es el llamado a crear una utopía, un paraíso tecnológico simbiótico evolutivo con paz y prosperidad. Es un recordatorio de que otro camino es posible.</p>
          </TextBlock>

          <TextBlock>
            <h4>Categorías de Productos y Servicios Básicos (Suministros Ilimitados)</h4>
            <ul>
              <li><strong>Tecnología Personal y Multimedia:</strong> Robots Asistentes, Vehículos Autónomos, Dispositivos VR/AR, Computadoras, Smartphones, Impresoras 3D con "matter compiler".</li>
              <li><strong>Alimentos y Bienestar:</strong> Comida saludable y sostenible producida por robots agrícolas, suplementos y pócimas naturales, drones de entrega.</li>
              <li><strong>Equipos para la Salud, Ejercicio y Bienestar Espiritual:</strong> Equipos de Fitness, herramientas de bienestar holístico (humidificadores, inciensos), asistencia de IA para meditación.</li>
              <li><strong>Entretenimiento, Creatividad y Aprendizaje:</strong> Juguetes, juegos, materiales de arte, instrumentos musicales, equipos de grabación profesional.</li>
              <li><strong>Bienes Personales y de Higiene:</strong> Ropa personalizada, maquillaje, productos de cuidado personal y corporal.</li>
              <li><strong>Cocina, Jardinería y Decoración:</strong> Robots de cocina, herramientas de jardinería, mobiliario personalizado.</li>
              <li><strong>Sistemas de Sostenibilidad y Energía:</strong> Sistemas de purificación de agua, paneles solares comunitarios.</li>
              <li><strong>Mantenimiento y Reparación:</strong> Robots de limpieza, acceso a kits de herramientas para reparaciones.</li>
            </ul>
          </TextBlock>
        </>
      ),
    },
    {
      name: "El Ecosistema StarSeed",
      buttonImg: ecosistemaBoton,
      internalImg: ecosistemaInterno,
      description: (
        <>
          <h3>El Ecosistema StarSeed</h3>
          <TextBlock>
            <h4>Una Red de Comunidades Interconectadas</h4>
            <ContentImage src={ecosistemaImg1} alt="Amor y evolución en el ecosistema" className="float-left" />
            <p>El Ecosistema StarSeed es la visión a gran escala: una red global de comunidades soberanas y autosuficientes, unidas por un propósito común y valores compartidos. No se trata de crear asentamientos aislados, sino de tejer una red de luz y conciencia que abarque todo el planeta.</p>
            <p>Cada comunidad, o "nodo", en el ecosistema funcionará como un centro de innovación y regeneración, contribuyendo con sus dones únicos a la red. La colaboración y el intercambio de conocimientos, recursos y talentos serán los pilares de este sistema interconectado, creando una sinergia que potenciará el crecimiento de todos.</p>
          </TextBlock>

          <TextBlock>
            <p>Nuestra <strong>Red Global de Comunidades</strong> representa la visión de un mundo interconectado, donde cada nodo es una comunidad autosostenible que contribuye al bienestar colectivo. Esta red facilita el intercambio de conocimientos, recursos y apoyo mutuo entre comunidades de todo el mundo.</p>
          </TextBlock>

          <TextBlock>
            <h4>La Visión Global</h4>
            <p>Imagina un mundo donde cada comunidad es un nodo en una red global de abundancia. Donde los recursos, conocimientos y tecnologías fluyen libremente entre las comunidades, creando una sinergia que beneficia a todos. Este es el corazón del Ecosistema StarSeed.</p>
            <h5>Características Principales</h5>
            <ul>
              <li><strong>Red de Comunidades Interconectadas:</strong> Cada comunidad mantiene su identidad única mientras comparte recursos y conocimientos con las demás.</li>
              <li><strong>Sistema de Intercambio Global:</strong> Una economía basada en el compartir, donde los excedentes de una comunidad pueden beneficiar a otras.</li>
              <li><strong>Plataforma Tecnológica Unificada:</strong> Un sistema digital que conecta a todas las comunidades, facilitando la comunicación y la colaboración.</li>
              <li><strong>Gobernanza Colectiva:</strong> Decisiones globales tomadas democráticamente por representantes de cada comunidad.</li>
            </ul>
          </TextBlock>

          <TextBlock>
            <p>El <strong>Intercambio Global</strong> es el corazón de nuestro ecosistema. A través de plataformas digitales seguras, las comunidades pueden compartir recursos, conocimientos y experiencias, creando una red de apoyo mutuo que trasciende fronteras geográficas y culturales.</p>
          </TextBlock>

          <TextBlock>
            <h4>Los Pilares del Ecosistema</h4>
            <h5>1. Sostenibilidad Ambiental</h5>
            <p>Cada comunidad se compromete a implementar prácticas sostenibles que respeten y regeneren el medio ambiente. Compartimos tecnologías limpias, métodos de agricultura regenerativa y soluciones de energía renovable.</p>
            <h5>2. Economía Colaborativa</h5>
            <p>Un sistema económico basado en la colaboración en lugar de la competencia. Los recursos se comparten, las habilidades se intercambian y la riqueza se distribuye equitativamente.</p>
          </TextBlock>

          <TextBlock>
            <ContentImage 
              src={require('../assets/images/community/ecosistema/Adobe Express - file (4).png')} 
              alt="Tecnología Unificada"
              className="float-left"
              style={{ maxWidth: '45%', margin: '2rem 2rem 2rem 0' }}
            />
            <p>Nuestra <strong>Tecnología Unificada</strong> conecta a todas las comunidades del ecosistema. Plataformas de comunicación, sistemas de gestión de recursos compartidos y herramientas de colaboración en tiempo real permiten una coordinación perfecta entre comunidades, sin importar la distancia.</p>
          </TextBlock>

          <TextBlock>
            <ContentImage 
              src={require('../assets/images/community/ecosistema/Adobe Express - file (7).png')}
              alt="Economía Colaborativa"
              className="float-right"
              style={{ maxWidth: '50%', margin: '2rem 0 2rem 2rem' }}
            />
            <p>La <strong>Economía Colaborativa</strong> es el motor de nuestro ecosistema. A través de sistemas de intercambio justo, monedas complementarias y bancos de tiempo, creamos una economía que valora las contribuciones de cada individuo y comunidad, fomentando la cooperación sobre la competencia.</p>
          </TextBlock>

          <TextBlock>
            {/* Continuing 'Los Pilares del Ecosistema' */}
            <h5>3. Educación y Crecimiento</h5>
            <p>Programas educativos compartidos, desde la primera infancia hasta la educación superior, enfocados en desarrollar el potencial humano completo. Incluye aprendizaje experiencial, desarrollo espiritual y habilidades prácticas para la vida.</p>
            <h5>4. Salud y Bienestar Integral</h5>
            <p>Un enfoque holístico de la salud que integra medicina convencional, terapias alternativas y prácticas de bienestar. Los avances médicos y las mejores prácticas se comparten a través de toda la red.</p>
          </TextBlock>

          <TextBlock>
            <h4>Cómo Funciona la Red</h4>
            <h5>1. Plataforma de Intercambio de Recursos</h5>
            <p>Sistema digital que permite a las comunidades compartir recursos excedentes, desde alimentos hasta equipos especializados.</p>
            <h5>2. Asamblea Global</h5>
            <p>Reunión periódica de representantes de todas las comunidades para tomar decisiones que afectan al ecosistema en su conjunto.</p>
            <h5>3. Banco de Conocimiento</h5>
            <p>Biblioteca digital colaborativa que recopila el conocimiento y las mejores prácticas de todas las comunidades.</p>
            <h5>4. Sistema de Intercambio de Miembros</h5>
            <p>Los residentes pueden viajar y vivir temporalmente en otras comunidades, enriqueciendo la experiencia colectiva.</p>
          </TextBlock>

          <TextBlock>
            <h4>Uniéndose al Ecosistema</h4>
            <p>¿Te imaginas ser parte de esta red global de comunidades? El Ecosistema StarSeed está creciendo y buscamos visionarios, creadores de cambio y soñadores prácticos que quieran unirse a nosotros en esta aventura.</p>
            <h5>Próximos Pasos</h5>
            <ol>
              <li><strong>Conéctate:</strong> Únete a nuestra comunidad en línea para conocer a otros miembros.</li>
              <li><strong>Participa:</strong> Asiste a nuestros eventos y talleres para aprender más.</li>
              <li><strong>Contribuye:</strong> Trae tus talentos y pasiones para enriquecer nuestra red.</li>
              <li><strong>Crea:</strong> Inicia una nueva comunidad o únete a un proyecto existente.</li>
            </ol>
            <p>El Ecosistema StarSeed es más que una red de comunidades; es una familia global trabajando junta para crear un mundo mejor. ¿Estás listo para ser parte de esta revolución?</p>
          </TextBlock>
        </>
      ),
    }
  ];

  return (
    <SectionWrapper id="starseed-community" ref={sectionRef}>
      <SectionTitle>Comunidades StarSeed</SectionTitle>
      <MainDescription>
        Sembrando las Semillas de una Nueva Tierra
        <br /><br />
        <strong>La Visión: ¿Qué es una Comunidad StarSeed?</strong>
        <br />
        Imagina un lugar donde la paz, la sostenibilidad y la abundancia no son ideales, sino la realidad cotidiana.
        <br />
        Una Comunidad StarSeed es un ecosistema social y físico diseñado para el florecimiento humano. Es la manifestación tangible de la Fundación StarSeed, un espacio que integra:
        <br />
        Educación para la mente.
        <br />
        Arte y Recreación para el alma.
        <br />
        Salud Integral para el cuerpo.
        <br />
        Vivienda Sostenible para la vida.
        <br />
        Organización Política para la libertad.
        <br />
        Son lugares para conectar, crear y evolucionar juntos.
        <br /><br />
        <strong>El Plan Maestro: Un Viaje en 3 Fases Hacia la Abundancia</strong>
        <br />
        Proponemos un plan estratégico, pragmático y escalable para hacer esta visión una realidad.
        <br />
        Fase 1: La Semilla - Crear un centro social magnético y autosostenible.
        <br />
        Fase 2: El Fruto - Expandir la red, integrar viviendas y tecnología con propósito.
        <br />
        Fase 3: La Cosecha - Alcanzar el modelo comunitario de abundancia total: el Comunismo StarSeed.
      </MainDescription>
      <ContentGrid>
        {sections.map((section, index) => (
          <ButtonContainer key={index}>
            <NetworkButton
              onClick={() => handleSectionClick(index)}
              whileTap={{ scale: 0.95 }}
            >
              <img src={section.buttonImg} alt={section.name} />
            </NetworkButton>
            <ButtonTitle>{section.name}</ButtonTitle>
          </ButtonContainer>
        ))}
      </ContentGrid>
      <AnimatePresence>
        {activeSection !== null && (
          <ExpandedContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveSection(null)}
            ref={modalRef}
            aria-modal="true"
            role="dialog"
            tabIndex="-1"
          >
            <CloseButton onClick={() => setActiveSection(null)} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
              &times;
            </CloseButton>
            <ExpandedCardContent ref={modalContentRef}>
              <TextContainer ref={textRef}>
                {sections[activeSection].description}
              </TextContainer>
            </ExpandedCardContent>
          </ExpandedContent>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

StarSeedCommunity.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      primary: PropTypes.string,
      secondary: PropTypes.string,
      accent: PropTypes.string,
      lightText: PropTypes.string,
      darkText: PropTypes.string,
    }),
  }),
};

export default StarSeedCommunity;
