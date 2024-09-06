import React, { useState } from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const MenuButton = styled.button`
  background-color: rgba(50, 50, 50, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(70, 70, 70, 0.8);
  }
`;

const MenuContent = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  background-color: rgba(50, 50, 50, 0.9);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`;

const MenuItem = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s;
  color: white;

  &:hover {
    background-color: rgba(80, 80, 80, 0.8);
  }
`;

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <MenuWrapper>
      <MenuContent isOpen={isOpen}>
        <MenuItem onClick={() => scrollToSection('header')}>Inicio</MenuItem>
        <MenuItem onClick={() => scrollToSection('purpose')}>Propósito</MenuItem>
        <MenuItem onClick={() => scrollToSection('missions')}>Misiones</MenuItem>
        <MenuItem onClick={() => scrollToSection('objectives')}>Objetivos</MenuItem>
        <MenuItem onClick={() => scrollToSection('social-networks')}>Redes Sociales</MenuItem>
        <MenuItem onClick={() => scrollToSection('community')}>Comunidad</MenuItem>
      </MenuContent>
      <MenuButton onClick={toggleMenu}>☰</MenuButton>
    </MenuWrapper>
  );
};

export default FloatingMenu;