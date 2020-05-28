import React , { Component } from 'react';
import './App.css';
import HomePage from "./pages/homepage/homePage.components"


class App extends Component  {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
  
}

export default App;
