import { useState } from 'react';
import './App.css';
import patternDivider from './images/pattern-divider-desktop.svg';
import diceIcon from './images/icon-dice.svg';

function App() {

  return (
    <div className='app-container'>
      <div className='advice-container'>
        <div className='advice-title'>ADVICE #117</div>
        <div className='advice-body'>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</div>
        <div className='pattern-divider'><img src={patternDivider} className='pattern-divider-image' alt='pattern divider graphic' /></div>
        <button className='randomize-button'><img src={diceIcon} className='dice-icon' alt='dice' /></button>
      </div>
    </div>
  )
}

export default App