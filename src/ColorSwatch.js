import React from 'react';

class ColorSwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 255,
      blue: 0,
      style: {
        padding: '100px',
        backgroundColor: `rgb(0, 255, 0)`,
      },
    };
    this.handleClickRedder = this.handleClickRedder.bind(this);
  }

  handleClickRedder(event) {
    event.preventDefault();
    let red = Math.floor(this.state.red * 0.9 + 0.1 * 255);
    let green = Math.floor(this.state.green * 0.9);
    let blue = Math.floor(this.state.blue * 0.9);

    console.log('RED CLICKED', red, this.state);
    this.setState({
      red: red,
      green: green,
      blue: blue,
      style: {
        padding: '100px',
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      },
    });
  }

  render() {
    return (
      <div>
        <div id='flex-container'>
          <div className='colorSwatch' style={this.state.style}></div>
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
