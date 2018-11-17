import React, { Component } from 'react';
import './App.css';

class Question extends Component {
  render() {
    return (
      <div className="question">
        <h2 class="question__prompt">{this.props.question.prompt}</h2>
        <ul className="question__options">
          {this.props.question.options.map(this.renderOption)}
        </ul>
      </div>
    );
  }

  renderOption(option) {
    return (
      <li className="question__option-item">
        <button className="question__option-button">{option.value}</button>
      </li>
    );
  }
}

export default Question;
