import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialValue = savedTheme === 'dark' || (!savedTheme && prefersDark);
    console.log('Initial theme value:', initialValue, 'savedTheme:', savedTheme, 'prefersDark:', prefersDark);
    return initialValue;
  });

  useEffect(() => {
    console.log('ThemeContext useEffect - isDark:', isDark);
    // Update document class and localStorage when theme changes
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Added dark class to document');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Removed dark class from document');
    }
    console.log('Document classes after update:', document.documentElement.className);
  }, [isDark]);

  const toggleTheme = () => {
    console.log('toggleTheme called - current isDark:', isDark);
    setIsDark(prev => {
      const newValue = !prev;
      console.log('Setting isDark to:', newValue);
      return newValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
