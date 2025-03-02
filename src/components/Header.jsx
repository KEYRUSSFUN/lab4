import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const {theme} = useContext(ThemeContext);

  return (
    <header style={{ backgroundColor: theme === "light" ? '#3498db' : "#222", color: 'white', padding: '20px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }}>
      <h1>Мой сайт лабораторных работ</h1>
    </header>
  );
}

export default Header;