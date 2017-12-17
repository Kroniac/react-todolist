import React, { Component } from 'react';
import List from './components/list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List index = "1" name="First" />
        <List index = "2" name="Second" />
        <List index = "3" name="Third" />
      </div>
    );
  }
}

export default App;
