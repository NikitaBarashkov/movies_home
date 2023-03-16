import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SearchProvider } from './providers/SearchProvider';
import { useInitApp } from './hooks/useInitApp';
import { ThemeProvider } from './providers/ThemeProvider';
import { Header } from './components/Header/Header';
import { MainPage } from './components/containers/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
import { SearchPage } from './components/containers/SearchPage/SearchPage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { FullCardMovie } from './components/FullCardMovie/FullCardMovie';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Preloader } from './components/Preloader/Preloader';

const SignInPage = lazy(() =>
  import('./components/containers/SignInPage/SignInPage')
);
const FavoritePage = lazy(() =>
  import('./components/containers/FavoritePage/FavoritePage')
);
const HistoryPage = lazy(() =>
  import('./components/containers/HistoryPage/HistoryPage')
);

function App() {
  useInitApp();

  return (
    <BrowserRouter>
      <ThemeProvider>
        <SearchProvider>
          <Header />
          <ErrorBoundary>
            <Suspense fallback={<Preloader />}>
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
            </Suspense>
          </ErrorBoundary>
          <Footer />
        </SearchProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
