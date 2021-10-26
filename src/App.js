import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // não precisa utilizar o construtor com public fields
  state = {
    name: 'Jhony Souza',
    counter: 0
  }
  
  // Através das arrow functions você não precisa criar o bind do método
  handlePClick = (event) => {
    this.setState({name: 'Emily Souzza'})
  }
  
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state
    const nextCounter = counter + 1
    this.setState({counter: nextCounter })
  }
  
  render() {
    const { name, counter } = this.state
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick}>
          {name} - {counter}
        </p>
        <a
          onClick={this.handleAClick}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
