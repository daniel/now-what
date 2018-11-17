import React, { Component } from 'react';
import './App.css';

class Phone extends Component {
  render() {
    return (
      <div className="phone">
        {this.props.children}
      </div>
    );
  }
}

export default Phone;
