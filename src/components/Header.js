import React from 'react';
import styled, { keyframes } from 'styled-components';

const changeBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeaderWrapper = styled.header`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab
  );
  background-size: 400% 400%;
  animation: ${changeBackground} 15s ease infinite;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
`;

const Logo = styled.img`
  height: 25vh;
  max-height: 200px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: calc(36px + 3vmin);
  margin-bottom: 10px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: calc(18px + 1.5vmin);
  margin-bottom: 15px;
  text-align: center;
`;

const Header = ({ logo }) => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Proyecto StarSeed Logo" />
      <Title>Proyecto StarSeed</Title>
      <Subtitle>La semilla universal de información evolutiva</Subtitle>
    </HeaderWrapper>
  );
};

export default Header;