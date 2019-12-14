import React from 'react';

class ColorSwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 50,
      blue: 20,
      green: 20,
      style: {
        padding: '100px',
        color: 'blue',
        backgroundColor: 'yellow',
      },
    };
  }

  handleClick(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div id='flex-container'>
          <div className='colorSwatch' style={this.state.style}></div>
          <div className='container'>
            <button type='button' id='redder' onClick={this.handleClick}>
              Redder
            </button>
            <button type='button' id='bluer' onClick={this.handleClick}>
              Bluer
            </button>
            <button type='button' id='greener' onClick={this.handleClick}>
              Greener
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorSwatch;
