import { Component } from 'react';
import Arrays from '../../Components/Arrays'

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
    return (
      <div className="App">
        <Arrays />
    </div>
    );
  }
}

export default App;
