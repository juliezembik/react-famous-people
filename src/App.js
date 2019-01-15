import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Famouspeople from './famouspeople/famouspeople';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Famouspeople />
        </header>
      </div>
    );
  }
}

export default App;
