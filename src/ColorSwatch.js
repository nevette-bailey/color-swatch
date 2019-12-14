import React from 'react';

class ColorSwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
      style: {
        padding: '200px',
        backgroundColor: `rgb(0, 0, 0)`,
      },
    };
    this.handleClickRedder = this.handleClickRedder.bind(this);
    this.handleClickGreener = this.handleClickGreener.bind(this);
    this.handleClickBluer = this.handleClickBluer.bind(this);
  }

  handleClickRedder(event) {
    event.preventDefault();
    let red = Math.floor(this.state.red * 0.9 + 0.1 * 255);
    let green = Math.floor(this.state.green * 0.9);
    let blue = Math.floor(this.state.blue * 0.9);

    this.setState({
      red: red,
      green: green,
      blue: blue,
      style: {
        padding: '200px',
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      },
    });
  }

  handleClickGreener(event) {
    event.preventDefault();
    let red = Math.floor(this.state.red * 0.9);
    let green = Math.floor(this.state.green * 0.9 + 0.1 * 255);
    let blue = Math.floor(this.state.blue * 0.9);

    this.setState({
      red: red,
      green: green,
      blue: blue,
      style: {
        padding: '200px',
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      },
    });
  }

  handleClickBluer(event) {
    event.preventDefault();
    let red = Math.floor(this.state.red * 0.9);
    let green = Math.floor(this.state.green * 0.9);
    let blue = Math.floor(this.state.blue * 0.9 + 0.1 * 255);

    this.setState({
      red: red,
      green: green,
      blue: blue,
      style: {
        padding: '200px',
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
            <button
              type='button'
              className='button'
              id='redder'
              onClick={this.handleClickRedder}>
              Redder
            </button>
            <button
              type='button'
              className='button'
              id='greener'
              onClick={this.handleClickGreener}>
              Greener
            </button>
            <button
              type='button'
              className='button'
              id='bluer'
              onClick={this.handleClickBluer}>
              Bluer
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorSwatch;
