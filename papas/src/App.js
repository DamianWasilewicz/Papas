import React from 'react';
import './App.css';
import Menu from './Menu.js';
import Cart from './Cart.js';
// import Login from './Login.js';
import Reviews from './Reviews.js';
import Popup from 'reactjs-popup';
import PopUp from './PopUp.js'
import { 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";

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
            <nav className="Nav">
              <ul className="flex-ul">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/cart">Cart</Link>
                {/* <Link to="/login">Login</Link> */}
                <div>
                  <div className="btn" onClick={this.togglePop}>
                    <button>Login</button>
                  </div>
                  {this.state.login ? <PopUp toggle={this.togglePop} /> : null}
                </div>
              </ul>
            </nav>
  
            <Switch>
              <Route exact path="/">
                <Menu />
              </Route>
  
              <Route path="/menu">
                <Menu />
              </Route>
  
              <Route path="/reviews">
                <Reviews />
              </Route>
  
              <Route path="/cart">
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