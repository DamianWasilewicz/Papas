import React from 'react';
import './App.css';
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
            </ul>
          </nav>

          <Switch>
            <Route path="/">
  
            </Route>

            <Route path="/menu">
        
            </Route>

            <Route path="/reviews">
          
            </Route>

            <Route path="/cart">
        
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
