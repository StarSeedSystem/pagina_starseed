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
import AnimatedBackground from './components/AnimatedBackground';
import FloatingMenu from './components/FloatingMenu';
import logo from './assets/imagenes/simbolo_starseed.png'; // Ajusta la ruta según sea necesario

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxProvider>
        <AnimatedBackground />
        <FloatingMenu />
        <AppWrapper>
          <Header id="header" logo={logo} />
          <main>
            <Purpose id="purpose" />
            <Missions id="missions" />
            <Objectives id="objectives" />
            <SocialNetworks id="social-networks" />
            <Community id="community" />
          </main>
          <Footer />
        </AppWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;