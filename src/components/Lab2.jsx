import React, {useState, useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Button({ text}) {
  const [counter, setCount] = useState(0);

  const incrementCount = () => {
  setCount(counter + 1);
  };
  const {theme} = useContext(ThemeContext);

  return (
    
    <div className="lab-2-container" style={{backgroundColor: theme === "light" ? 'white' : '#333', color: theme === "light" ? 'black' : 'white'}}>
      <h2>Лабораторная работа 2</h2>
        <p>Счетчик: {counter}</p>
        <button className={'button'} onClick={incrementCount}>
            {text}
        </button>
    </div>
  );
}

export default Button;