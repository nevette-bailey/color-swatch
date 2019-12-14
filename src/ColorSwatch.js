import React from 'react';

class ColorSwatch extends React.Component {
  constructor() {
    super ()
    this.state = {
      red: 50,
      blue: 20,
      green: 20
    }
  }
  render() {
    return (
      <div>
        <div id='flex-container'>
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
        </div>
      </div>
    )
  }
}

export default ColorSwatch;
