import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, AppWrapper } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './components/Header';
import Purpose from './components/Purpose';
import Missions from './components/Missions';
import Objectives from './components/Objectives';
import SocialNetworks from './components/SocialNetworks';
import Community from './components/Community';
import Footer from './components/Footer';
import logo from './assets/imagenes/simbolo_starseed.png'; // Ajusta la ruta según sea necesario

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxProvider>
        <AppWrapper>
          <Header logo={logo} />
          <main>
            <Purpose />
            <Missions />
            <Objectives />
            <SocialNetworks />
            <Community />
          </main>
          <Footer />
        </AppWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;