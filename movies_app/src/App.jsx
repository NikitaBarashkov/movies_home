import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './providers/ThemeProvider';
import { Header } from './components/Header/Header';
import { MainPage } from './components/containers/MainPage/MainPage';
import { Footer } from './components/Footer/Footer'; 
import { SearchPage } from './components/containers/SearchPage/SearchPage';
import { SignInPage } from './components/containers/SignInPage/SignInPage';

function App() { 
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/signin' element={<SignInPage />} />
        </Routes>        
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
