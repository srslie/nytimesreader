import React from 'react';
import { Article } from './Article';
import './styles.Section.css';

export const Section = () => {
  return (
    <div className="section">
      <h2>Section</h2>
      <Article/>
      <Article/>
    </div>
  )
}