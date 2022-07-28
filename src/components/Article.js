import React from 'react';
import '../styles/Article.css';

export const Article = (props) => {
  return (
    <div className="article">
      <h3>{props.title}</h3>
      <h4>{props.byline}</h4>
      <p>{props.abstract}</p>
    </div>
  )
}