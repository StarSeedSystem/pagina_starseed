import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.main};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;
    text-align: center;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.secondary};
  }

  h2 {
    font-size: 4rem;
    text-shadow: 0 0 10px ${props => props.theme.colors.primary};
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 3rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    max-width: 100%;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 1.3rem;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  button {
    font-size: 1.3rem;
    padding: 1rem 2rem;
  }
`;

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;