import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

function Lab4() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const {toggleTheme,theme} = useContext(ThemeContext);
 
    return <div className="counter-section">
    <h2>Лабораторная работа 4</h2>
    <button onClick={toggleTheme}>
            {theme === 'light' ? 'Включить темную тему' : 'Включить светлую тему'}
    </button>
    <button onClick={() => dispatch(decrement())}>-</button>
    <span>{count}</span>
    <button onClick={() => dispatch(increment())}>+</button>
    </div>
}

export default Lab4;

