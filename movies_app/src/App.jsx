import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './providers/ThemeProvider';
import { Header } from './components/Header/Header';
import { MainPage } from './components/containers/MainPage/MainPage';
import { Footer } from './components/Footer/Footer'; 

function App() { 
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <MainPage />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
