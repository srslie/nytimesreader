import '../styles/App.css';
import {Section} from './Section';
import {Home} from './Home'
import {React, useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { getHomeArticles } from '../helpers';

export const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect( () => {
    const data = getHomeArticles()
    setArticles(data)
  }, [articles])

  console.log(articles)
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
  
      <Routes>
        <Route 
          path="/sections" 
          element={<Section props={articles}/>}
        />
        <Route
          path="/"
          element={<Home props={articles}/>}
        />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
