//import logo from './logo.svg';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters'
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
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

export default App;*/
class App extends Component {
  render() { 
    return (
      <React.Fragment> 
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;