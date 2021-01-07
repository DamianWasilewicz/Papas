import React from 'react';
import './App.css';
import Menu from './Menu.js';
import Cart from './Cart.js';
import Reviews from './Reviews.js';
import Popup from 'reactjs-popup';
import PopUp from './PopUp.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import HomeFunctionalComponent from "./components/HomeFunctionalComponent";
import NavBarFunctionalComponent from "./components/NavBarFunctionalComponent";

export default class App extends React.Component {
  state = {
    login: false
  };

  togglePop = () => {
    this.setState({
      login: !this.state.login
    });
  };


  render(){
    return (
      <React.Fragment>
        <div className="App">
          <Router>

            <Switch>
              <Route exact path="/">
                <NavBarFunctionalComponent />
                <HomeFunctionalComponent />
              </Route>

              <Route path="/menu">
                <NavBarFunctionalComponent />
                <Menu />
              </Route>

              <Route path="/reviews">
                <NavBarFunctionalComponent />
                <Reviews />
              </Route>

              <Route path="/cart">
                <NavBarFunctionalComponent />
                <Cart />
              </Route>

              {/* <Route path="/login">
                <Login />
              </Route> */}

            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }

}
