import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Lab3() {
  const {theme} = useContext(ThemeContext);
  return <div style={{ padding: '20px', backgroundColor: theme === "light" ? 'white' : '#333', color: theme === "light" ? 'black' : 'white'}}><h2>Лабораторная работа 3</h2><p>Содержимое лабораторной работы 3.</p></div>;
}

export default Lab3;