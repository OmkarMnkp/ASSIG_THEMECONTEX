// src/components/MainContent.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const MainContent = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#f4f4f4' : '#222', color: theme === 'light' ? '#000' : '#fff' }}>
      <h2>Main Content</h2>
      <p>This content is styled based on the current theme.</p>
    </div>
  );
};

export default MainContent;
