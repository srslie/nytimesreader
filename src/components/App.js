import './App.css';
import './Article';
import './Section';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>NY Times Top Stories</h1>
      </header>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sections">Sections</Link>
        </li>
      </ul>
  
      <Switch>
        <Route path="/sections">
          <Section />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
