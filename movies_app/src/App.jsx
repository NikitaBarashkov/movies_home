import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';

function App() { 
  return (
    <BrowserRouter>
      <ThemeProvider>

      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
