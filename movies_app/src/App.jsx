import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initStore } from './store/initStoreSlice';

import { ThemeProvider } from './providers/ThemeProvider';
import { Header } from './components/Header/Header';
import { MainPage } from './components/containers/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
import { SearchPage } from './components/containers/SearchPage/SearchPage';
import { SignInPage } from './components/containers/SignInPage/SignInPage';
import { FavoritePage } from './components/containers/FavoritePage/FavoritePage';
import { HistoryPage } from './components/containers/HistoryPage/HistoryPage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { FullCardMovie } from './components/FullCardMovie/FullCardMovie';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const dispatch = useDispatch();
  dispatch(initStore());

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/search/:title' element={<FullCardMovie />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route element={<PrivateRoute />}>
              <Route path='/favorite' element={<FavoritePage />} />
              <Route path='/history' element={<HistoryPage />} />
            </Route>
          </Routes>
        </ErrorBoundary>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
