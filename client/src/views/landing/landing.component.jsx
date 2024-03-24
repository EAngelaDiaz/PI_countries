import './landing.style.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <div className='container'>
        <p className='message'>Bienvenidos!!</p>
        <Link to={'/home'}>
        <button className='button'>Home</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing
