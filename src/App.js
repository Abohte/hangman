import React, { Component } from 'react';
import hangman from './images/hangman.png'
import './App.css';
import Board from './containers/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hangman} className="logo" alt="logo" />
        </header>
        <main>
          <Board />
        </main>
      </div>
    );
  }
}

export default App;
