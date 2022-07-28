import React from 'react';
import '../styles/Home.css';
import {Section} from './Section'

export const Home = (props) => {
  return (
    <div className="home">
      <Section props={props}/>
    </div>
  )
}