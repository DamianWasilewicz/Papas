import React from 'react';
import './App.css';
import Menu from './Menu.js';
import Cart from './Cart.js';
import Login from './Login.js';
import { 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";

function App() {
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
              <Link to="/login">Login</Link>
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
              <Menu />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;