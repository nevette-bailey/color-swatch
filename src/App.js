import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorSwatch from './ColorSwatch';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <div id='flex-container'>
          <div className='colorSwatch'></div>
          <div className='container'>
            <button type='button' id='redder'>
              Redder
            </button>
            <button type='button' id='bluer'>
              Bluer
            </button>
            <button type='button' id='greener'>
              Greener
            </button>
          </div>
        </div> */}
        <ColorSwatch />

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
