import React , { Component } from 'react';
import './App.css';
import HomePage from "./pages/homepage/homePage.components"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/signIn-and-signUp-page/signIn-and-signUp-page.component"
import { Route ,Switch, Router } from "react-router-dom"


class App extends Component  {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </ Switch>
      </div>
    );
  }
  
}

export default App;
