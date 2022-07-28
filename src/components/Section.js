import React from 'react';
import { useState, useEffect } from 'react';
import {Article} from './Article';
import '../styles/Section.css';
import { getArticles } from '../helpers';

export const Section = (props) => {
  const [sectionArticles, setSectionArticles] = useState([])

  useEffect(() => {
    Promise.resolve(getArticles(props.name))
      .then(items => setSectionArticles(items))
  })

  return (
    <div className="section">
      <h2>{props.name}</h2>
      {sectionArticles.map(article => <Article 
        title={article.title} 
        byline={article.byline} 
        url={article.url} 
        abstract={article.abstract} 
        key={article.short_url}/>)
      }
    </div>
  )
  
}