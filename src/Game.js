import React, { Component } from 'react';
import './App.css';
import TV from './TV';
import Phone from './Phone';
import Question from './Question';

class Game extends Component {

  question = {
    prompt: 'What do yo want to do?',
    options: [
      {
        id: 1,
        value: 'Do A'
      },
      {
        id: 2,
        value: 'Do B'
      }
    ]
  };

  render() {
    return (
      <div className="game">
          <TV/>
          <Phone>
            <Question question={this.question}></Question>
          </Phone>
      </div>
    );
  }
}

export default Game;
