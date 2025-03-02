import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import { Provider} from 'react-redux';
import { store } from './redux/store';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Lab2 from './components/Lab2';
import Lab3 from './components/Lab3';
import Lab4 from './components/Lab4';
import './App.css';

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  

  return (
    <div className={`app-container ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="content-wrapper">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<p>Выберите лабораторную работу из меню.</p>} />
            <Route path="/lab2" element={<Lab2 text={'Счётчик'} />} />
            <Route path="/lab3" element={<Lab3 />} />
            <Route path="/lab4" element={<Lab4 />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;