import React from 'react';
import {Article} from './Article';
import '../styles/Section.css';


export const Section = (props) => {
  return (
    <div className="section">
      <h2>Section</h2>
      <Article props={props} />
    </div>
  )
}