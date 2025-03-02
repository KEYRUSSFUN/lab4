import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav style={{ borderRight: '1px solid #e0e0e0', padding: '20px', width: '250px' }}>
      <ul>
        <li><Link to="/" style={{display: "block", padding: "10px"}}>Главная</Link></li>
        <li><Link to="/lab2"  style={{display: "block", padding: "10px"}}>Лабораторная работа 2</Link></li>
        <li><Link to="/lab3"  style={{display: "block", padding: "10px"}}>Лабораторная работа 3</Link></li>
        <li><Link to="/lab4"  style={{display: "block", padding: "10px"}}>Лабораторная работа 4</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;