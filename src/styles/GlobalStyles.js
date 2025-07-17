import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.main};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;
    text-align: center;
    font-size: 16px;
    width: 100%;
    min-height: 100vh;
    position: relative;
    
    @media (max-width: 768px) {
      font-size: 14px;
      -webkit-overflow-scrolling: touch;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.secondary};
  }

  h2 {
    font-size: 3.5rem;
    text-shadow: 0 0 10px ${props => props.theme.colors.primary};
    margin: 1rem 0;
    
    @media (max-width: 1024px) {
      font-size: 2.8rem;
    }
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  h3 {
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    max-width: 100%;
    margin: 1rem auto;
    line-height: 1.6;
    font-size: 1.1rem;
    padding: 0 1rem;
    text-align: justify;
    
    @media (max-width: 1024px) {
      font-size: 1.05rem;
      padding: 0 1.5rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 1rem;
      line-height: 1.5;
    }
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
      padding: 0 0.75rem;
    }
  }

  button {
    font-size: 1.1rem;
    padding: 0.8rem 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
    }
  }
`;

export const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;