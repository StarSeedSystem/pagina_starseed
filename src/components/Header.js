import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const colorChange = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeaderWrapper = styled.header`
  padding: 3rem 2rem 5rem;
  text-align: center;
  background: linear-gradient(
    270deg,
    #ff0000, #ffb000, #ffff00, #00ff00, #00ffff, #0000ff, #7000ff
  );
  background-size: 1400% 1400%;
  animation: ${colorChange} 30s ease infinite;
  backdrop-filter: blur(5px);
  border-radius: 0 0 30% 30% / 0 0 100% 100%;
  margin-bottom: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled(motion.p)`
  font-size: 2rem;
  color: ${props => props.theme.colors.text};
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  max-width: 800px;
  margin: 0 auto;
`;

const MenuButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${props => props.theme.colors.text}; // Cambiado a color de texto (blanco)
  color: ${props => props.theme.colors.background}; // Cambiado para contraste
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
  z-index: 1001;
`;

const Nav = styled(motion.nav)`
  position: fixed;
  bottom: 90px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 10px;
  z-index: 1000;
`;

const NavItem = styled(motion.button)`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proyecto StarSeed
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          La semilla universal de información evolutiva
        </Subtitle>
      </HeaderWrapper>
      <MenuButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? '×' : '☰'}
      </MenuButton>
      <AnimatePresence>
        {isMenuOpen && (
          <Nav
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <NavItem onClick={() => scrollToSection('purpose')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Propósito
            </NavItem>
            <NavItem onClick={() => scrollToSection('missions')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Misiones
            </NavItem>
            <NavItem onClick={() => scrollToSection('objectives')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Objetivos
            </NavItem>
            <NavItem onClick={() => scrollToSection('social-networks')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Redes Sociales
            </NavItem>
            <NavItem onClick={() => scrollToSection('community')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Comunidad
            </NavItem>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;