import './styles.css';
import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <div className="container button-container">
        <button
          disabled={disabled}
          className="w-full p-4 mt-5 bg-blue-600 text-white hover:bg-blue-800"
          onClick={onClick}
        >
          {text}
        </button>
      </div>
    );
  }
}
