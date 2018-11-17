import React, { Component } from 'react';
import './App.css';
import TV from './TV';
import Phone from './Phone';

class Game extends Component {
  render() {
    return (
      <div className="game">
          <TV/>
          <Phone/>
      </div>
    );
  }
}

export default Game;
