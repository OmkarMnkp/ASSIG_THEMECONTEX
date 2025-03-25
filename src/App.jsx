// src/App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './component/Navbar';
import MainContent from './component/MainContent';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
