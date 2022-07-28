import '../styles/App.css';
import {Section} from './Section';
import {Home} from './Home'
import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { getArticles, parseDate } from '../helpers';
// import { Article } from './Article';

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [section, setSection] = useState('home');
  const sections = [
    'arts',
    'automobiles', 
    'books', 
    'business', 
    'fashion', 
    'food', 
    'health', 
    'home', 
    'insider', 
    'magazine', 
    'movies', 
    'nyregion', 
    'obituaries', 
    'opinion', 
    'politics', 
    'realestate', 
    'science', 
    'sports', 
    'sundayreview', 
    'technology', 
    'theater', 
    't-magazine', 
    'travel', 
    'upshot', 
    'us', 
    'world'
  ]

  console.log(setSection)

  useEffect(() => {
    let mounted = true;
    Promise.resolve(getArticles(section))
      .then(items => {
        if(mounted) {
          setArticles(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1>NY Times Top Stories</h1>
          </Link>
          <h2>{parseDate((new Date()).toUTCString())}</h2>
        </header> 
        <div>
          <h2>Sections</h2>
          {sections.map(name => {
            return (
              <button>
                <Link to={`section/${name}`}>{name}</Link>
              </button>
            )}
          )}
        </div>
      {<Section name={section} />}
      </div>

    <Routes>
      <Route 
        path="section/:name"
        element={<Section name={section}/>}
      />
      <Route
        path="/"
        element={<Home articles={articles} />}
      />
    </Routes>
    
  </Router>
  )
}

export default App;