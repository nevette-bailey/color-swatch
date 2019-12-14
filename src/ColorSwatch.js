import React from 'react';

class ColorSwatch extends React.Component {
  constructor() {
    super();
    this.state = { red: 0, blue: 0, green: 255 };
    this.style = {
      padding: '100px',
      color: 'blue',
      backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`,
    };
    this.handleClickRedder = this.handleClickRedder.bind(this);
  }

  handleClickRedder(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div id='flex-container'>
          <div className='colorSwatch' style={this.style}></div>
          <div className='container'>
            <button type='button' id='redder' onClick={this.handleClickRedder}>
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
