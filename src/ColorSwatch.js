import React from 'react';

class ColorSwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 255,
      green: 255,
      blue: 255,
    };
    this.handleClickRedder = this.handleClickRedder.bind(this);
    this.handleClickGreener = this.handleClickGreener.bind(this);
    this.handleClickBluer = this.handleClickBluer.bind(this);
  }

  setTheState(red, green, blue) {
    this.setState({
      red: red,
      green: green,
      blue: blue,
    });
  }
  handleClickRedder(event) {
    event.preventDefault();
    let red = Math.floor(this.state.red * 0.9 + 0.1 * 255);
    let green = Math.floor(this.state.green * 0.9);
    let blue = Math.floor(this.state.blue * 0.9);

    this.setTheState(red, green, blue);
  }

  handleClickGreener(event) {
    event.preventDefault();
    let red = Math.floor(this.state.red * 0.9);
    let green = Math.floor(this.state.green * 0.9 + 0.1 * 255);
    let blue = Math.floor(this.state.blue * 0.9);

    this.setTheState(red, green, blue);
  }

  handleClickBluer(event) {
    event.preventDefault();
    let red = Math.floor(this.state.red * 0.9);
    let green = Math.floor(this.state.green * 0.9);
    let blue = Math.floor(this.state.blue * 0.9 + 0.1 * 255);

    this.setTheState(red, green, blue);
  }

  render() {
    const style = {
      padding: '200px',
      backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`,
      border: '1px solid black',
    };
    return (
      <div>
        <div id='flex-container'>
          <div className='colorSwatch' style={style}></div>
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
