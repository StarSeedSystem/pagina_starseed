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
import StarSeedCommunity from './components/StarSeedCommunity';
import Community from './components/Community';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingMenu from './components/FloatingMenu';
import logo1 from './assets/nuevas_imagenes/1 logotipos/1 simbolo_starseed.png';
import logo2 from './assets/nuevas_imagenes/1 logotipos/2 .png';
import logo3 from './assets/nuevas_imagenes/1 logotipos/3.png';
import logo4 from './assets/nuevas_imagenes/1 logotipos/4.png';

const logos = [logo1, logo2, logo3, logo4];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxProvider>
        <AnimatedBackground />
        <FloatingMenu />
        <AppWrapper>
          <Header id="header" logos={logos} />
          <main>
            <Purpose id="purpose" />
            <Missions id="missions" />
            <Objectives id="objectives" />
            <SocialNetworks id="social-networks" />
            <StarSeedCommunity id="starseed-community" />
            <Community id="community" />
          </main>
          <Footer />
        </AppWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;