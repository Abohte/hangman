import React, { Component } from 'react';
import hangman from './images/hangman.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hangman} className="logo" alt="logo" />
        </header>
        <main>
      
        </main>
      </div>
    );
  }
}

export default App;
