import React, { Component } from 'react';
import UserInput from './userInput';
import Story from './story';
import About from './about';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1>Write a Mad Lib</h1>
        <UserInput/>
        <Story/>
        <About/>
      </div>
    );
  }
}

export default App;
