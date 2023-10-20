import React, { useState, useEffect } from 'react';
import './App.css';
import patternDivider from './images/pattern-divider-desktop.svg';
import diceIcon from './images/icon-dice.svg';

function App() {
  const [advice, setAdvice] = useState('');
  const [slipId, setSlipId] = useState('');

  const fetchRandomAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      if (data && data.slip) {
        setAdvice(data.slip.advice);
        setSlipId(data.slip.id);
      } else {
        console.error('Failed to retrieve advice from the API');
      }
    } catch (error) {
      console.error('An error occurred while fetching advice:', error);
    }
  };


  useEffect(() => {
    fetchRandomAdvice();
  }, []);

  return (
    <div className='app-container'>
      <div className='advice-container'>
        <div className='advice-title'>ADVICE #{slipId}</div>
        <div className='advice-body'>"{advice}"</div>
        <div className='pattern-divider'><img src={patternDivider} className='pattern-divider-image' alt='pattern divider graphic' /></div>
        <button className='randomize-button' onClick={fetchRandomAdvice}>
          <img src={diceIcon} className='dice-icon' alt='dice' />
        </button>
      </div>
    </div>
  );
}

export default App;